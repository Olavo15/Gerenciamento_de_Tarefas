<?php

namespace App\Entity;

class projeto {
    public $nome;
    public $area;
    //protected $id_usuario;

    public function setNome($nome) {

        $this->nome = $nome;
    }

    public function setArea($area){

        $this->area = $area;
    }

}