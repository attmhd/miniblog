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

    // Article admin routes
    Route::controller(ArticleController::class)->prefix('admin/artikel')->name('article.')->group(function () {
        Route::post('/new', 'store')->name('store');
        Route::delete('/{article}', 'destroy')->name('destroy');
        Route::get('/', 'index')->name('index');
        Route::get('/{article}/edit', 'edit')->name('edit');
    });

    // Admin dashboard routes
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/', function () {
            return Inertia::render('Admin/AdminDashboard');
        })->name('dashboard');

        Route::get('/setting', function () {
            return Inertia::render('Admin/Setting');
        })->name('setting');

        Route::get('/category', function () {
            return Inertia::render('Admin/Category');
        })->name('category');

        Route::get('/artikel/new', function () {
            return Inertia::render('Admin/Form');
        })->name('artikel.new');
    });
});


require __DIR__.'/auth.php';
