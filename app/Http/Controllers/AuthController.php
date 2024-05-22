<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
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

//      public function register(Request $request){


//         return  \App\Models\Entreprise::create([
//             'name' => $request->input('name'),
//             // 'users_id'=>$request->input('users_id'),
//             'raison'=>$request->input('raison'),
//             'email' => $request->input('email'),
//             'site' => $request->input('site'),
//             'logo' => $request->input('logo'),
//             'status'=>$request->input('status'),
//             'representant' => $request->input('representant'),
//             'tele1'=>$request->input('tele1'),
//             'tele2'=>$request->input('tele2'),
//             'tele3'=>$request->input('tele3'),

//             'password' => Hash::make($request->input('password')),

//     ]);

//     return  User::create([

//         'roles_id'=>$request->input('roles_id'),

//         'email' => $request->input('email'),

//         'password' => Hash::make($request->input('password')),

// ])

// }
    //  public function registeruser(Request $request){
    //     return  User::create([

    //         'roles_id'=>$request->input('roles_id'),

    //         'email' => $request->input('email'),

    //         'password' => Hash::make($request->input('password')),

    // ]);}
     public function register(Request $request){
        return  \App\Models\Entreprise::create([
            'name' => $request->input('name'),
            'users_id'=>1,
            'raison'=>$request->input('raison'),
            'email' => $request->input('email'),
            'site' => $request->input('site'),
            'logo' => $request->input('logo'),
            'status'=>$request->input('status'),
            'representant' => $request->input('representant'),
            'tele1'=>$request->input('tele1'),
            'tele2'=>$request->input('tele2'),
            'tele3'=>$request->input('tele3'),

            'password' => Hash::make($request->input('password')),

    ]);}
     public function registeruser(Request $request){
        return  User::create([

            'roles_id'=>$request->input('roles_id'),

            'email' => $request->input('email'),

            'password' => Hash::make($request->input('password')),

    ]);}

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
        } else {
            $entreprise = \App\Models\Entreprise::where('email', $request->input('email'))->first();
            if ($entreprise && Hash::check($request->input('password'), $entreprise->password)) {

                $token = $entreprise->createToken('token')->plainTextToken;
                $cookie = cookie('jwt', $token, 60 * 24);


                return response([
                    'message' => 'Authentication successful',
                    'token' => $token
                ])->withCookie($cookie);
            } else {
                return response([
                    'message' => 'Invalid credentials!'
                ], Response::HTTP_UNAUTHORIZED);
            }
        }

        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);

        $role = \App\Models\Role::find($user->roles_id); // Utilisez find pour obtenir le modèle
    $nomrole = $role->name;

        return response([
            'message' => 'Authentication successful',
            'token' => $token,
            'nom_role'=>$nomrole,
        ])->withCookie($cookie);
    }
    // public function login(Request $request){
    //    if(!Auth::attempt($request->only('email','password'))){
    //     return response([
    //     'message'=> 'invalid!!!!!!'
    //    ], Response::HTTP_UNAUTHORIZED);
    //    }
    //    $user = Auth::user();
    //    $token = $user->createToken('token')->plainTextToken;
    //    $cookie = cookie('jwt',$token,60*24);

    //    return response([
    //     'message'=> $token
    //    ])->withCookie($cookie);
    // }

    public function user(){
        return Auth::user();
    }

    public function logout(Request $request){
        $cookie=Cookie::forget('jwt');
        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }
}
