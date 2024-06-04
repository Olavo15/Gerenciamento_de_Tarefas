<?php

namespace App\Entity;

class tarefa {
    protected $titulo;
    protected $descricao;
    protected $id_projeto;
    protected $id_tabela_tarefa;


    public function setTitulo($titulo) {
        if(strlen($titulo) < 1 ) {
            http_response_code(400);
            echo json_encode(['error' => 'O título deve ter pelo menos 1 caractere']);
            exit;
        } elseif (strlen($titulo) > 25) {
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

    public function idProjeto($id_projeto){
        $this->id_projeto = $id_projeto;
    }

    public function idTabelaTarefa($id_tabela_tarefa){
        
        $this->id_tabela_tarefa = $id_tabela_tarefa;
    }

}