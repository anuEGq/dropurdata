<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;
    protected $table = 'settings';
    protected $primaryKey = 'settings_id';
	protected $fillable = [
		'settings_id',
        'supported_files',
        'max_upload_size'
	];
}
