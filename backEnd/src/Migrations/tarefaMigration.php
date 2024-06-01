<?php

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';
use Illuminate\Database\Capsule\Manager as Capsule;

class tarefaMigration
{
    public function up()
    {
        Capsule::schema()->create('tarefa', function ($table) {
            $table->id('id');
            $table->string('titulo', 255);
            $table->string('descricao', 255);
            $table->unsignedInteger('id_usuario');
            $table->foreign('id_usuario')->references('id')->on('usuario');
            $table->unsignedInteger('id_projeto');
            $table->foreign('id_projeto')->references('id')->on('projeto');
            $table->unsignedInteger('id_tabela_tarefa');
            $table->foreign('id_tabela_tarefa')->references('id')->on('tabela_tarefa');
        });

        echo "Tabela tarefa criada com sucesso!.\n";
    }
}

$tarefaMigration = new tarefaMigration();
$tarefaMigration->up();

