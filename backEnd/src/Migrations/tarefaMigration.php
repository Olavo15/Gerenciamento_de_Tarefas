<?php

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';
use Illuminate\Database\Capsule\Manager as Capsule;

class TarefaMigration
{
    public function up()
    {
        Capsule::schema()->create('tarefas', function ($table) {
            $table->id();
            $table->string('titulo', 255);
            $table->string('descricao', 255);
            $table->unsignedBigInteger('id_equipe_tarefa');
            $table->foreign('id_equipe_tarefa')->references('id')->on('equipe_tarefa');
            $table->unsignedBigInteger('id_projeto');
            $table->foreign('id_projeto')->references('id')->on('projeto');
            $table->unsignedBigInteger('id_tabela_tarefa');
            $table->foreign('id_tabela_tarefa')->references('id')->on('tabela_tarefa');
            $table->timestamps();
        });
    }
}

// $migration = new tarefaMigration();
// $migration->up();