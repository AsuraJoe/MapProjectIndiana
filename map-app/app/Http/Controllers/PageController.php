<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Province;

class PageController extends Controller{
    public function test(){
        $province = Province::all();
        return view('test') -> with('province',$province);
    }
}
