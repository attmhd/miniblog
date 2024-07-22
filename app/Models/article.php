<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class article extends Model
{
    use HasFactory;
    protected $fillable = [ 'user_id','title','description','category_id'];

    public function category()
    {
        return $this->belongsTo(category::class);
        }
        public function user()
    {
        return $this->belongsTo(user::class);
        }

}
