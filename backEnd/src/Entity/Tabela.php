<?php

namespace App\Entity;

class Tabela {
    protected $titulo;
    protected $id_projeto;
    protected $cor;

    public function setTitulo($titulo) {
        if(strlen($titulo) < 3 ) {
            http_response_code(400);
            echo json_encode(['error' => 'O título deve ter pelo menos 1 caractere']);
            exit;
        } elseif (strlen($titulo) > 20) {
            http_response_code(400);
            echo json_encode(['error' => 'O título não pode ter mais de 20 caracteres']);
            exit;
        }
        
        $this->titulo = $titulo;
    }

    public function setIdProjeto($id_projeto) {
        $this->id_projeto = $id_projeto;
    }
    
    public function setCor($cor){
        $this->cor = $cor;
    }


}
