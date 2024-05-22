<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    protected $primaryKey = 'ID_Film';
    protected $fillable = ['Titre', 'Realisateur', 'Durée', 'ID_Genre', 'Affiche', 'Date_Sortie', 'Origine'];

    public function genre()
    {
        return $this->belongsTo(Genre::class, 'ID_Genre', 'ID_Genre');
    }

    public function horaires()
    {
        return $this->hasMany(Horaire::class, 'ID_Film', 'ID_Film');
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class, 'ID_Film', 'ID_Film');
    }
}
