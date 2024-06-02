<?php

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';
use Illuminate\Database\Capsule\Manager as Capsule;

class MigrationEquipeTarefa
{
    public function up()
    {
        Capsule::schema()->create('equipe_tarefa', function ($table) {
            $table->id();
            $table->unsignedBigInteger('id_tarefa');
            $table->foreign('id_tarefa')->references('id')->on('tarefas');
            $table->unsignedBigInteger('id_usuario');
            $table->foreign('id_usuario')->references('id')->on('usuarios');
            $table->timestamps();
        });
    }
}
