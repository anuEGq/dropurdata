<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use App\Models\Settings;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $result = Settings::get();
        if($result->count() <= 0){
            $file_types = Config::get('settings.file_types');
            $max_upload_size = '500000';
            DB::table('settings')->insert([
            'supported_files' => json_encode($file_types),
            'max_upload_size' => $max_upload_size,
        ]);
        }
    }
}
