<?php

namespace App\Entity;

class equipetarefa{
    public $titulo;
    public $nome;
    public $id_tarefa;

    public function setTitulo($titulo) {
        $this->titulo = $titulo;
    }
    public function setNome($nome) {
        $this->nome = $nome;
    }
    public function setId_tarefa($id_tarefa) {
        $this->id_tarefa = $id_tarefa;
    }
}