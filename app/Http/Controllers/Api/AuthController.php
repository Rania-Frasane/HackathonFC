<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
// use App\Http\Controllers\Hash;
class AuthController extends Controller
{
    /**
     * Handles user login.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function user(){
        return 'authentication user';
    }

    // Other methods remain unchanged...
}
