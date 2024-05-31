<?php 

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';

use Illuminate\Database\Capsule\Manager as Capsule;

class Usuarios
{
    public function up()
    {
        Capsule::schema()->create('usuarios', function ($table) {
            $table->id();
            $table->string('nome');
            $table->string('senha');
            $table->string('email')->unique();
            $table->string('url_perfil_img')->null;
            $table->timestamps();
        });
    }
}

$execute = new Usuarios();
 $execute->up(); 
