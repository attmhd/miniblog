<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\article;
use Inertia\Inertia;

class ArticleController extends Controller
{

    public function index(){
        return Inertia::render('Admin/Artikel',[
            'articles' => article::latest()->paginate(5)
        ]);
    }


    public function edit(article $id){
        return Inertia::render('Admin/Form',[
            'articles' => $id,
        ]
    );
    }

    public function getAll(){
    return Inertia::render('Home',[
        'articles' => article::all()
    ]);
    }

    public function getById(article $id){
        return Inertia::render('Detail',[
        'articles' => $id,
    ]);
    }

    public function store(Request $req)  {
        $data = $req->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        article::create($data);
    }

    // public function destroy($id){
    //     $post = article::findOrfail($id);

    //     $post->delete();

    //     if($post){
    //         return Redirect::route('article.index');
    //     }
    // }
}
