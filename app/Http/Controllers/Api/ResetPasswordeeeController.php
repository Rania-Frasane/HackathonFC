<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\HelloMail;
use App\Models\ResetPassword;
use App\Models\User;
use App\Models\Entreprise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class ResetPasswordeeeController extends Controller
{
    public function generateResetCode(Request $request)
    {
       
    
        $email = $request->input('email');
        // return $email;
    
        // Search for user by email
        $user = User::where('email', $email)->first();
    
        if (!$user) {
            // If user does not exist, search for entreprise by email
            $entreprise = Entreprise::where('email', $email)->first();
            if (!$entreprise) {
                return response()->json(['message' => 'User not found'], 404);
            }
    
            // Generate reset code for entreprise
            $resetCode = Str::random(6);
            ResetPassword::create([
                'email' => $email,
                'token' => $resetCode,
                'created_at' => Carbon::now()
            ]);
    
            // Send reset email to entreprise
            Mail::to($entreprise->email)->send(new HelloMail($resetCode));
            return response()->json(['message' => 'Le mail a bien été envoyé à l\'entreprise',"code"=>$resetCode]);
        }
    
        // Generate reset code for user
        $resetCode = Str::random(6);
        ResetPassword::create([
            'email' => $request->email,
            'token' => $resetCode,
            'created_at'=>Carbon::now()
           
        ]);

        // Envoyer le code de réinitialisation par email
        Mail::to($user->email)->send(new HelloMail($resetCode));

        return response()->json(['message' => "Le mail a bien été envoyé"]);
    }


    public function verifiercode(Request $request)
{
    $ResetPassword = ResetPassword::where('email', $request->emailreset)
    ->latest() // Pour récupérer le dernier enregistrement en premier
    ->first();

    if ($ResetPassword && $ResetPassword->token === $request->code) {
        return response()->json(['message' => "le code est verifié"]);
    } else {
        return response()->json(['message' => "le code non validé"]);
}

}

    public function changepassword (Request $request){
        $userData = $request->validate([
            
            'emailreset'    => 'required|email',
            'resetpassword' => 'required|min:4',
        ]);
        $user = User::where('email', $request->emailreset)->first();
        
        if(!$user){
        $entreprise = Entreprise::where('email', $request->emailreset)->first();
        
            if ($request->has('resetpassword')) {
                $entreprise->update([
                    'password' => Hash::make($request->resetpassword),
                ]);
            }
            return response()->json([
                // 'token' => $entreprise->createToken('auth_token')->plainTextToken,
                'message' => 'Mot de passe modifié avec succès',
            ], 201);
         
        }
        
        if ($request->has('resetpassword')) {
            $user->update([
                'password' => Hash::make($request->resetpassword),
            ]);
        }
        return response()->json([
            'token' => $user->createToken('auth_token')->plainTextToken,
        ], 201);

    }

}
