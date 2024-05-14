<?php

namespace App\Controllers;

use App\Entity\tarefa;
use App\model\tarefaModel;

class tarefaController extends tarefa {
    public function create(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['titulo']) || !isset($body['descricao']) || !isset($body['progresso'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }
        
        parent::setTitulo($body['titulo']);
        parent::setDescricao($body['descricao']);
        parent::setProgresso($body['progresso']);
        

        $tarefaModel = new TarefaModel();
        $create_result = $tarefaModel->create($this->titulo, $this->descricao, $this->progresso);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result['success']]);
        } else {

            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }

    public function listByUserId($param){
        $id = $param[0];

        parent::setId($id);

        $tarefaModel = new TarefaModel();
        $create_result = $tarefaModel->listUserById($this->id);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result['dados']]);
        } else {

            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }
}