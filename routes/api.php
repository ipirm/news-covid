<?php

use Illuminate\Http\Request;

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

Route::post('register', 'Auth\AuthController@register')->name('register');
Route::post('login', 'Auth\AuthController@login')->name('login');
Route::post('/logout', 'Auth\AuthController@logout');
Route::get('/user', 'Auth\AuthController@user');
Route::get('/orders','OrderController@index');

Route::middleware('auth:api')->group(function () {
    Route::delete('/orders/{id}','OrderController@delete');
    Route::post('/orders','OrderController@post');
});

