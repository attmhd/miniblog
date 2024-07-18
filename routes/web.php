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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get('/', function () {
    return Inertia::render('Home');
    });

Route::get('/detail', function () {
    return Inertia::render('Detail');
    });

Route::get('/tst', function () {
    return Inertia::render('Auth/SignIn');
    });


Route::get('/admin', function () {
    return Inertia::render('Admin/AdminDashboard');
})->middleware(['auth', 'verified'])->name('admin');

Route::get('/admin/artikel', function () {
    return Inertia::render('Admin/Artikel');
})->middleware(['auth', 'verified'])->name('admin');

// Route::get('/admin/artikel/new', function () {
//     return Inertia::render('Admin/Form');
// })->middleware(['auth', 'verified'])->name('admin');

Route::get('/admin/artikel/{id}', function ($id) {
    return Inertia::render('Admin/Form', ['userId' => $id,]);
})->middleware(['auth', 'verified'])->name('admin');

Route::post('/admin/artikel',[UserController::class, 'store'])->name('article.store');
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    
});

require __DIR__.'/auth.php';
