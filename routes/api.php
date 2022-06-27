<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\SettingsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UploadController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('uploadfile', [UploadController::class, 'uploadFile']);

Route::get('getsettings', [SettingsController::class, 'getSettings']);
Route::post('setSettings', [SettingsController::class, 'setSettings']);

Route::get('getAllFileCounts', [FileController::class, 'getAllFileCounts']);
Route::post('getFiles', [FileController::class, 'getFiles']);
Route::post('deleteFile', [FileController::class, 'deleteFile']);
Route::post('convertXmltoHtml', [FileController::class, 'convertXmltoHtml']);
Route::post('editFile', [FileController::class, 'editFile']);