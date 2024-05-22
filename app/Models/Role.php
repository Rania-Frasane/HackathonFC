<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    // protected $primaryKey = 'ID_Role';
    protected $fillable = ['name'];
    
    public function users()
    {
        return $this->hasMany(User::class, 'roles_id');
    }

    // public function clients()
    // {
    //     return $this->belongsToMany(Client::class, 'user_roles', 'ID_Role', 'ID_User');
    // }
}
