<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use App\Models\UploadedFiles;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    //Function to upload file 
    function uploadFile(Request $request){
        if($request->hasFile('file')){
            $file = $request->file('file');
            $file_name = $file->getClientOriginalName();
            $file_name = date('His').$file_name;
            $file_type = $file->getClientMimeType();
            $file->storeAs('files/',$file_name,'public');
            $data = $request->all();
            UploadedFiles::create([
                'file_title' => $data['title'],
                'keywords' => $data['keyword'],
                'description' => $data['desc'],
                'file_ext' => $file_name,
                'file_type' => $file_type
            ]);
            $status = '200';      
            return response()->json(compact('status'), 200);
        }
        else{
            $status = '500';      
            return response()->json(compact('status'), 500);
        }
        
    }
}
