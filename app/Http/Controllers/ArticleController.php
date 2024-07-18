<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\article;


class ArticleController extends Controller
{
    public function store(Request $req)  {
        $data = $req->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        article::create($data);
    }
}
