<?php

use App\Http\Controllers\JobsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/** Manage Jobs */
//save
Route::post('saveJobs', [JobsController::class, 'saveJobs']);
//edit
Route::post('editJobs', [JobsController::class, 'editJobs']);
//show All
Route::get('showAllJobs', [JobsController::class, 'showAllJobs']);
//delete
Route::get('deleteJob/{id}', [JobsController::class, 'deleteJob']);


