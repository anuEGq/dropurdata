<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Settings;

class SettingsController extends Controller
{
    //function to get the current settings from db
    function getSettings(){
        $settings = DB::table('settings')->select('settings_id','supported_files','max_upload_size')->get();
        $status = '200';      
        return response()->json(compact('settings','status'), 200);
    }

    //function to update settings
    function setSettings(Request $request){
        $data = $request->all();
        Settings::where('settings_id', $data['set_id'])
                ->update(['supported_files' => json_encode($data['fileTypes']),
                            'max_upload_size' => $data['maxSize']]);
        $status = '200';
        $message = "Settings Updated Successfully";      
        return response()->json(compact('message','status'), 200);
    }
}
