<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
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

Route::get('/tst', function () {
    return Inertia::render('Tst');});


// Article routes
Route::controller(ArticleController::class)->group(function () {
    Route::get('/', 'getAll')->name('article.getAll');
    Route::get('/detail/{article}', 'getById')->name('article.getById');
});


// Authenticated routes
Route::middleware('auth')->group(function () {

    

    // Profile routes
    Route::controller(ProfileController::class)->prefix('profile')->name('profile.')->group(function () {
        Route::get('/', 'edit')->name('edit');
        Route::patch('/', 'update')->name('update');
        Route::delete('/', 'destroy')->name('destroy');
    });

    // Category admin routes
    Route::controller(CategoryController::class)->prefix('admin/category')->name('category.')->group(function () {
        Route::get('/new', 'edit')->name('edit');
        Route::post('/new', 'store')->name('store');
        Route::delete('/{category}', 'destroy')->name('destroy');
        Route::get('/', 'index')->name('index');
        Route::get('/{category}/edit', 'edit')->name('edit');
        Route::patch('/{category}', 'update')->name('update');
    });

     // Article admin routes
    Route::controller(ArticleController::class)->prefix('admin/artikel')->name('article.')->group(function () {
        Route::get('/new', 'addAndEdit')->name('addAndEdit');
        Route::post('/new', 'store')->name('store');
        Route::delete('/{article}', 'destroy')->name('destroy');
        Route::get('/', 'index')->name('index');
        Route::get('/{article}/edit', 'addAndEdit')->name('addAndEdit');
        Route::patch('/{article}', 'update')->name('update');
    });

    // Admin dashboard routes
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/', function () {
            return Inertia::render('Admin/AdminDashboard');
        })->name('dashboard');

        Route::get('/setting', function () {
            return Inertia::render('Admin/Setting');
        })->name('setting');


        // Route::get('/artikel/new', [CategoryController::class,"getAll"]);
    });
});


require __DIR__.'/auth.php';
