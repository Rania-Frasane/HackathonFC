<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Horaire extends Model
{
    protected $primaryKey = 'ID_Horaire';
    protected $fillable = ['Heure', 'Date', 'ID_Film'];

    public function film()
    {
        return $this->belongsTo(Film::class, 'ID_Film', 'ID_Film');
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class, 'ID_Horaire', 'ID_Horaire');
    }
}

