<?php

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';
use Illuminate\Database\Capsule\Manager as Capsule;

class MigrationEquipeTarefa
{
    public function migration()
    {
        Capsule::schema()->create('equipe_tarefa', function ($table) {
            $table->increments('id');
            $table->string('titulo', 255);
            $table->string('nome', 255)->nullable(false);
            $table->unsignedInteger('id_usuario');
            $table->unsignedInteger('id_tarefa');
            $table->foreign('id_usuario')->references('id')->on('usuario');
            $table->foreign('id_tarefa')->references('id')->on('tarefa');
        });

        echo "Tabela equipe_tarefa criada com sucesso!.\n";
    }
}

$migrationEquipeTarefa = new MigrationEquipeTarefa();
$migrationEquipeTarefa->migration();
