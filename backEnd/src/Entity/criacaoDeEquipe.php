<?php

namespace App\Entity;

class CriacaoDeEquipe{
    protected $nome;
    protected $projeto;
    public function setNome($nome){
         $this -> nome = $nome;
    }
    public function setProjeto($projeto){
        $this -> projeto = $projeto;
    }
}