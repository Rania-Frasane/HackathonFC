<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Film; //

class FilmController extends Controller
{
    public function index (){

        // return response()->json(Film::all(), 200);
        return response()->json(Film::all());
    }
}
