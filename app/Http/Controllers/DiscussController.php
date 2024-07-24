<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Discuss;
use App\Models\Article;
use Inertia\Inertia;



class DiscussController extends Controller
{
   

        public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id'=>'required',
            'article_id' => 'required',
            'comment' => 'required',
        ]);

        Discuss::create($validatedData);

    }

    public function destroy($id)
    {
        $discuss = Discuss::find($id);

        if (!$discuss) {
            return abort(404);
        }

        $discuss->delete();

        return redirect()->route('article.show')->with('success', 'Discuss deleted successfully!');
    }

     public function show($id)
{
    // Fetch the discussion with eager loading for related models
    $discussion = Discuss::whereHas('article', function ($query) use ($id) {
        $query->where('id', $id);
    })->with('article.user','user')->get();

        $article = Article::with('user')->find($id);

    // If no discussion is found, return only the article data
    if ($discussion->isEmpty()) {
        return Inertia::render('Detail', [
            'article' => $article,
        ]);
    }

    return Inertia::render('Detail', [
        'discussion' => $discussion,
    ]);
}


}
