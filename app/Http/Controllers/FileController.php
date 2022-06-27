<?php

namespace App\Http\Controllers;

use App\Models\UploadedFiles;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    //function get each file counts for the dashboard cards
    function getAllFileCounts()
    {
        $imageFiles = DB::table('uploaded_files')->orWhere('file_type', 'like', '%' . 'image/' . '%')->count();
        $videoFiles = DB::table('uploaded_files')->orWhere('file_type', 'like', '%' . 'video/' . '%')->count();
        $HtmlFiles = DB::table('uploaded_files')->orWhere('file_type', 'like', '%' . 'text/html' . '%')->count();
        $xmlFiles = DB::table('uploaded_files')->orWhere('file_type', 'like', '%' . 'text/xml' . '%')->count();
        $audioFiles = DB::table('uploaded_files')->orWhere('file_type', 'like', '%' . 'audio/' . '%')->count();
        $wordFiles = DB::table('uploaded_files')->orWhere('file_type', 'like', '%' . 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' . '%')->count();
        return response()->json(compact('imageFiles','videoFiles','HtmlFiles','xmlFiles','audioFiles','wordFiles'), 200);
    }

    //fuction to file data to populate data table
    function getFiles(Request $request){
        $data = $request->all();
        $fileType = $data['fileType']; 
        if($fileType == "text/html" || $fileType == "text/xml" ){
            $response = DB::table('uploaded_files')->select("file_id as id","file_title as title","description as Description","keywords as keyword","file_ext as FileName","updated_at")->Where('file_type',  $fileType)->get();
        }
        else{
            $fileType = preg_split("/[\/]+/", $fileType);
            $response = DB::table('uploaded_files')->select("file_id as id","file_title as title","description as Description","keywords as keyword","file_ext as FileName","updated_at")->orWhere('file_type', 'like', '%' . $fileType[0] . '%')->get();
        }
       
        return response()->json(compact('response' ), 200);
    }

    //function to delete file from db and storage folder
    function deleteFile(Request $request){
        $data = $request->input('id');

        $filename = DB::table('uploaded_files')->select('file_ext')->where('file_id',$data)->first();
        if(Storage::exists('public/files/'.$filename->file_ext)){
            $file = UploadedFiles::find($data);
            $file->delete();
             Storage::delete('public/files/'.$filename->file_ext);
             $status = 200;
             return response()->json(compact('status' ), 200);
         }else{
            $status = 500;
            return response()->json(compact('status' ), 500);
         }
    }

     //function to convert XML to HTML
    function convertXmltoHtml(Request $request){

        $filename = $request->input('filename');

        $lib_base ='../resources/xslt/test.xsl';

        $destinationPath = base_path().'/storage/app/public/files'.DIRECTORY_SEPARATOR.$filename;
        $xml = new \DOMDocument();
        $xml->formatOutput = false;
        $xml->load($destinationPath);

        $xsl = new \DOMDocument;
        $xsl->load($lib_base);

        $feed = file_get_contents($destinationPath);
        $items = simplexml_load_string($feed);

        $proc = new \XSLTProcessor();
        $proc->importStyleSheet($xsl);

        $output =$proc->transformToXML($xml);


        $status = 200;
        return response()->json(compact('output','status'),200);
    }

    /* Function to update file details like keywords,filetitle, description*/
    function editFile(Request $request){
        $file_id = $request->input('id');
        $file_title = $request->input('title');
        $file_description = $request->input('desc');
        $keywords = $request->input('keywords');
        $file =  UploadedFiles::find($file_id);
        if($file){
            $file->file_title = $file_title;
            $file->description = $file_description;
            $file->keywords = $keywords;
            $file->update();
            $status = 200;
            return response()->json(compact('status'),200);
        }
        else{
            $status = 500;
            return response()->json(compact('status'),500);
        }
       
    }
}
