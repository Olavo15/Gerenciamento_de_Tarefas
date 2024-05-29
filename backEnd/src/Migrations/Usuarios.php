<?php 

namespace App\Migrations;

use Illuminate\Database\Capsule\Manager as Capsule;

class Usuarios
{
    public function up()
    {
        Capsule::Schema()->create('usuarios', function ($table) {
            $table->id();
            $table->string('nome');
            $table->string('senha');
            $table->string('email')->unique();
            $table->timestamps();
        });
    }
}
