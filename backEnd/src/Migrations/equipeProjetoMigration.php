<?php

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';
use Illuminate\Database\Capsule\Manager as Capsule;

class MigrationEquipeTarefa
{
    public function up()
    {
        Capsule::schema()->create('equipe_projeto', function ($table) {
            $table->id('id');
            $table->unsignedInteger('id_usuario');
            $table->unsignedInteger('id_projeto');
            $table->foreign('id_usuario')->references('id')->on('usuario');
            $table->foreign('id_projeto')->references('id')->on('projeto');
            $table->timestamps();
        });

        echo "Tabela equipe_projeto criada com sucesso!.\n";
    }
}

$migrationEquipeTarefa = new MigrationEquipeTarefa();
$migrationEquipeTarefa->up();

