<?php

namespace App\Http\Controllers;

use App\Models\Jobs;
use http\Env\Response;
use Illuminate\Http\Request;

class JobsController extends Controller
{
    /** Save Jobs */
    public function saveJobs(Request $request)
    {
        $job = new Jobs();
        $job->name = $request->input('name');
        $job->color = $request->input('color');
        $job->description = $request->input('description');
        $job->save();
        return Response()->json('وظیفه با موفقیت ذخیره شد ');
    }


    /** Edit Job */
    public function editJobs(Request $request)
    {
        $job = Jobs::find($request->input('id'));
        $job->name = $request->input('name');
        $job->color = $request->input('color');
        $job->description = $request->input('description');
        $job->save();
        return Response()->json('وظیفه با موفقیت ویرایش شد');
    }

    /** Show All Jobs */
    public function showAllJobs()
    {
        $jobs = Jobs::all();
        return Response()->json($jobs);
    }

    /** Delete jobs */
    public function deleteJob($id)
    {
        $job = Jobs::find($id);
        $job->delete();
        return Response()->json('وظیفه با موفقیت حذف شد');
    }
}
