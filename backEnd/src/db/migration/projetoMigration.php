<?php

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';
use Illuminate\Database\Capsule\Manager as Capsule;

class MigrationProjeto
{
    public function migration()
    {
        Capsule::schema()->create('projeto', function ($table) {
            $table->increments('id');
            $table->string('titulo', 255);
            $table->text('descricao');
            $table->unsignedInteger('id_usuario');
            $table->foreign('id_usuario')->references('id')->on('usuario');
        });

        echo "Tabela Projeto criada com sucesso!.\n";
    }
}

$migrationProjeto = new MigrationProjeto();
$migrationProjeto->migration();
