<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class article extends Model
{
    use HasFactory;
    protected $fillable = [ 'user_id','title','description','content','category_id'];

    public function category()
    {
        return $this->belongsTo(category::class);
        }
    
    
    public function discusses()
    {
        return $this->hasMany(Discuss::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
