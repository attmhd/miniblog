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

    public function getById(int $article)
    {
        $articles = Article::with('user')->findOrFail($article);
        return Inertia::render('Detail', [
            'articles' => $articles,
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
