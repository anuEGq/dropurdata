<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class ConfigSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
            $file_types = Config::get('settings.file_types');
            $max_upload_size = Config::get('settings.max_upload_size');
            DB::table('settings')->insert([
                'supported_files' => json_encode($file_types),
                'max_upload_size' => $max_upload_size,
            ]);
    }
}
