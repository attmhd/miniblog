<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/',[ArticleController::class, 'getAll'])->name('article.getAll');

// Route::get(`/detail/{id}`,[ArticleController::class, 'getById'])->name('article.getById');


// Route::get('/tst', function () {
//     return Inertia::render('Auth/SignIn');
//     });




Route::get('/detail/{id}',[ArticleController::class, 'getById'])->name('article.getById');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/admin/artikel/new',[ArticleController::class, 'store'])->name('article.store');
    Route::get('/admin/artikel',[ArticleController::class, 'index'])->name('article.index');
    Route::get('/admin/artikel/id={id}',[ArticleController::class, 'edit'])->name('article.edit');
    

    Route::get('/admin', function () {
    return Inertia::render('Admin/AdminDashboard');});
    Route::get('/admin/setting', function () {
    return Inertia::render('Admin/Setting');});
    Route::get('/admin/category', function () {
    return Inertia::render('Admin/Category');});
    
    Route::get('/admin/artikel/new', function () {
    return Inertia::render('Admin/Form');});
});

require __DIR__.'/auth.php';
