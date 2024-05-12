<?php

namespace App\Entity;

class Projeto {
    public $titulo;
    public $descricao;
    // private $id_usuario;

    public function setTitulo($titulo) {
        if(strlen($titulo) == 0 || strlen($titulo) >= 15) {
            http_response_code(400);
            echo json_encode(['error' => 'O título deve ter entre 1 e 14 caracteres']);
            exit;
        }
        
        $this->titulo = $titulo;
    }

    public function setDescricao($descricao) {
        if(strlen($descricao) == 0) {
            http_response_code(400);
            echo json_encode(['error' => 'A descrição deve ter entre 1 e 255 caracteres']);
            exit;
        }
        $this->descricao = $descricao;
    }
}