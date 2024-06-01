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
        });

        echo "Tabela tabela_tarefa criada com sucesso!.\n";
    }
}

$tabelaTarefaMigration = new tabelaTarefaMigration();
$tabelaTarefaMigration->up();

