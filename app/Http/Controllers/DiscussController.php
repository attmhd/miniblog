<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Discuss;


class DiscussController extends Controller
{
    public function getDiscussions()
    {
        $discussions = Discuss::with('user')->latest()->get();
        return response()->json($discussions);
    }

    public function createDiscussion(Request $request)
    {
        $validatedData = $request->validate([
            'comment' => 'required|string|max:255',
        ]);

        $discussion = new Discuss();
        $discussion->user_id = Auth::user()->id;
        $discussion->comment = $validatedData['comment'];
        $discussion->date = now();
        $discussion->save();

        return response()->json(['message' => 'Discussion created successfully']);
    }

        public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id'=>'required',
            'article_id' => 'required',
            'comment' => 'required',
        ]);

        Category::create($validatedData);

        return redirect()->route('article.getById')->with('success', 'Category created successfully!');
    }
}
