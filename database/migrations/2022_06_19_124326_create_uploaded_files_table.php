<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUploadedFilesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('uploaded_files', function (Blueprint $table)
		{
			$table->increments('file_id');
            $table->string('file_title', 250);
			$table->string('description', 500);
            $table->json('keywords')->nullable();
            $table->string('file_ext', 150);
			$table->string('file_type', 150);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('uploaded_files');
	}

}