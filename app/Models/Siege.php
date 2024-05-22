<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Siege extends Model
{
    protected $primaryKey = 'ID_Siege';
    protected $fillable = ['Numéro_Siege', 'ID_Salle', 'Etat'];

    public function salle()
    {
        return $this->belongsTo(Salle::class, 'ID_Salle', 'ID_Salle');
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class, 'ID_Siege', 'ID_Siege');
    }
}
