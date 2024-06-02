<?php

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';
use Illuminate\Database\Capsule\Manager as Capsule;


class MigrationEquipeProjeto
{
    public function up()
    {
        Capsule::schema()->create('equipe_projeto', function ($table) {
            $table->id();
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('id_projeto');
            $table->foreign('id_usuario')->references('id')->on('usuarios');
            $table->foreign('id_projeto')->references('id')->on('projeto');
            $table->timestamps();
        });
    }
}

// $migration = new MigrationEquipeProjeto();
// $migration->up();