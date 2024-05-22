<?php
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\FilmController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\ResetPasswordeeeController;
use App\Http\Controllers\Api\ResetPasswordeeeController;
use App\Http\Controllers\Api\RoleController;


// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

//Auth
Route::get('/getroles',[RoleController::class,'getroles']);

Route::post('register', [App\Http\Controllers\AuthController::class, 'register']);
Route::post('registeruser', [App\Http\Controllers\AuthController::class, 'registeruser']);
Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function (){
    Route::get('users', [App\Http\Controllers\AuthController::class, 'user']);
    Route::post('logout', [App\Http\Controllers\AuthController::class, 'logout']);

});

// Client

Route::get('/clients', [ClientController::class, 'index']);
Route::get('/clients/{id}', [ClientController::class, 'show']);
Route::put('/clients/{id}', [ClientController::class, 'update']);
Route::delete('/clients/{id}', [ClientController::class, 'destroy']);


//Film
Route::get('/films', [FilmController::class, 'index']);










// Route::post('/ResetPassword/{email}',[ResetPasswordeeeController::class,"generateResetCode"]);
Route::post('/Code/{code}/{emailreset}',[ResetPasswordeeeController::class,"verifiercode"]);
Route::post('/ResetPassword/{email}', [ResetPasswordeeeController::class, 'generateResetCode']);

Route::post('/changePassword', [ResetPasswordeeeController::class, "changepassword"]);