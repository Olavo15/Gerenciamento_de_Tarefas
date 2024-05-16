<?php

namespace App\Entity;

class equipeTarefa{
    public $titulo;
    public $nome;
    protected $id_usuario;
    public $id_tarefa;

    public function setTitulo($titulo) {
        $this->titulo = $titulo;
    }
    public function setNome($nome) {
        $this->nome = $nome;
    }
    public function setId_usuario($id_usuario) {
        $this->id_usuario = $id_usuario;
    }

    public function setId_tarefa($id_tarefa) {
        $this->id_tarefa = $id_tarefa;
    }
}