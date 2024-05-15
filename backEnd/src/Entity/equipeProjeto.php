<?php

namespace App\Entity;

class equipeProjeto {
    public $id_usuario;
    public $id_projeto;
    
    //protected $id_usuario;

    public function setId_usuario($id_usuario){

        $this->id_usuario = $id_usuario;
    }
    public function setId_projeto($id_projeto) {

        $this->id_projeto = $id_projeto;
    }


}