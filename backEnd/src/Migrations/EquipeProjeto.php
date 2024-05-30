<?php

namespace App\Migrations;
require_once __DIR__. '/../config/boostrap.php';
use Illuminate\Database\Capsule\Manager as Capsule;

class EquipeProjeto{
    public function up(){
        Capsule::schema()->create('equipe_projeto', function ($table) {
            $table->id();
            $table->unsignedBigInteger('id_usuario');
            $table->foreign('id_usuario')->references('id')->on('usuarios');
            $table->unsignedBigInteger('id_projeto');
            $table->foreign('id_projeto')->references('id')->on('projeto');
            $table->timestamps();
        });
    }

    public function down()
    {
        Capsule::schema()->dropIfExists('equipe_projeto');
    }
}

$execute = new EquipeProjeto();
$execute->up();