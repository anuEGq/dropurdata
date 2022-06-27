<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class UploadedFiles extends Model
{
    use HasFactory;
    protected $table = 'uploaded_files';
    protected $primaryKey = 'file_id';
	protected $fillable = [
		'file_id',
        'file_title',
        'description',
        'keywords',
        'file_ext',
        'file_type'
	];
}
