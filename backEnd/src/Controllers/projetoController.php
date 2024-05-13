<?php

namespace App\Controllers;

use App\Entity\projeto;
use App\model\projetoModel;

class projetoController extends projeto {
    public function create(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['titulo']) || !isset($body['descricao'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }
        
        parent::setTitulo($body['titulo']);
        parent::setDescricao($body['descricao']);
        

        $projetoModel = new ProjetoModel();
        $create_result = $projetoModel->create($this->titulo, $this->descricao,);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result['success']]);
        } else {

            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }
}