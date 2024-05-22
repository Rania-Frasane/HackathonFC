<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'domaines_id',
        'intitule_theme',
        'duree_formation',
        'status',
    ];

    /**
     * Get the domaine that owns the theme.
     */
    public function domaine()
    {
        return $this->belongsTo(Domaine::class, 'domaines_id');
    }
}
