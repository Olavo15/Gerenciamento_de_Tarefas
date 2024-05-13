<?php

namespace App\Entity;

class projeto {
    public $titulo;
    public $descricao;
    // private $id_usuario;
    protected $id;

    public function setTitulo($titulo) {
        if(strlen($titulo) < 1 ) {
            http_response_code(400);
            echo json_encode(['error' => 'O título deve ter pelo menos 1 caractere']);
            exit;
        } elseif (strlen($titulo) > 14) {
            http_response_code(400);
            echo json_encode(['error' => 'O título não pode ter mais de 14 caracteres']);
            exit;
        }
        
        $this->titulo = $titulo;
    }

    public function setDescricao($descricao) {
        if(strlen($descricao) < 1) {
            http_response_code(400);
            echo json_encode(['error' => 'A descrição deve ter pelo menos 1 caractere']);
            exit;
        } elseif (strlen($descricao) > 255) {
            http_response_code(400);
            echo json_encode(['error' => 'A descrição não pode ter mais de 255 caracteres']);
            exit;
        }
        $this->descricao = $descricao;
    }

    public function setId($id){
        $this->id = $id;
    }
}