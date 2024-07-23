<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\article;
use App\Models\Category;
use Inertia\Inertia;

class ArticleController extends Controller
{

    public function index()
    {
        $articles = Article::with('category')->paginate(5);
        return Inertia::render('Admin/Article/Artikel', [
            'articles' => $articles,
        ]);
    }

    public function addAndEdit(Article $article)
    {
        $category = category::all();
        return Inertia::render('Admin/Article/Form', [
            'articles' => $article,
            'category' => $category,
          
        ]);
    }

    public function getAll()
    {
        $articles = Article::with('category')->get();
        return Inertia::render('Home', [
            'articles' => $articles,
        ]);

    }

    public function show(int $id)
    {
 
        $discussions = Article::select([
        'discusses.id as discuss_id',
        'articles.id as article_id',
        'articles.title',
        'articles.content',
        'articles.created_at',
        'u2.name as users_comment',
        'u1.name as author_name',
        'u1.occupation as pekerjaan',
        'u1.occupation as pekerjaan',
        'discusses.comment',
        'discusses.created_at as comment_created',
        ])
        ->join('discusses', 'articles.id', '=', 'discusses.article_id')
        ->join('users as u1', 'u1.id', '=', 'articles.user_id')
        ->join('users as u2', 'u2.id', '=', 'discusses.user_id')
        ->where('articles.id', $id)
        ->get();

        return Inertia::render('Detail', [
            'discussions' => $discussions,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'title' => 'required',
            'category_id' => 'required',
            'description' => 'required',
            'content' => 'required',
        ]);

        Article::create($validatedData);

        return redirect()->route('article.index')->with('success', 'Article created successfully!');
    }
    

    public function update(Article $article, Request $request)
    {
        $article->update($request->validate([
            'title' => 'required',
            'description' => 'required',
            'content' => 'required',
            'category_id' => 'required',
        ]));

        return redirect()->route('article.index')->with('success', 'Article updated successfully!');
    }

    public function destroy(Article $article)
    {
        $article->delete();

        return redirect()->route('article.index')->with('success', 'Article deleted successfully!');
    }

    
}
