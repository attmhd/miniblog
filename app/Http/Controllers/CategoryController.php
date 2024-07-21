<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;


class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::paginate(5);
        return Inertia::render('Admin/Category/Category', [
            'category' => $category,
        ]);
    }

    public function edit(Category $Category)
    {
        return Inertia::render('Admin/Category/Form', [
            'category' => $Category,
        ]);
    }

    public function getAll()
    {
        $category = Category::all();
        return Inertia::render('Admin/Artikel/Form', [
            'category' => $category,
        ]);
    }

    public function getById(Category $Category)
    {
        return Inertia::render('Detail', [
            'category' => $Category,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
        ]);

        Category::create($validatedData);

        return redirect()->route('category.index')->with('success', 'Category created successfully!');
    }
    

    public function update(Category $Category, Request $request)
    {
        $Category->update($request->validate([
            'name' => 'required',
        ]));

        return redirect()->route('category.index')->with('success', 'Category updated successfully!');
    }

    public function destroy(Category $Category)
    {
        $Category->delete();

        return redirect()->route('category.index')->with('success', 'Category deleted successfully!');
    }
}
