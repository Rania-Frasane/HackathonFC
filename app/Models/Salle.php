<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Salle extends Model
{
    protected $primaryKey = 'ID_Salle';
    protected $fillable = ['Nom_Salle', 'Capacite'];

    public function sieges()
    {
        return $this->hasMany(Siege::class, 'ID_Salle', 'ID_Salle');
    }
}
