<?php

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';
use Illuminate\Database\Capsule\Manager as Capsule;

class tabelaTarefaMigration
{
    public function up()
    {
        Capsule::schema()->create('tabela_tarefa', function ($table) {
            $table->id('id');
            $table->string('titulo', 255);
            $table->string('cor');
            $table->unsignedBigInteger('id_projeto');
            $table->foreign('id_projeto')->references('id')->on('projeto');
            $table->timestamps();
        });
    }
}
