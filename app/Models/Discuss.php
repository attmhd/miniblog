<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discuss extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'article_id',
        'comment',
        'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function article()
    {
        return $this->hasMany(Article::class);
        }
}
