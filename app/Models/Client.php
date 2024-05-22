<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $primaryKey = 'ID_Client';
    protected $fillable = ['Nom', 'Prenom', 'Email', 'Telephone'];

    public function reservations()
    {
        return $this->hasMany(Reservation::class, 'ID_Client', 'ID_Client');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_roles', 'ID_User', 'ID_Role');
    }
}
