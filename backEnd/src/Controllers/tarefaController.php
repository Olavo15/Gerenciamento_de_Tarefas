<?php

namespace App\Controllers;

use App\Entity\tarefa;
use App\model\Tarefas;

class tarefaController extends tarefa {
    public function create(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['titulo']) || !isset($body['descricao']) || !isset($body['id_projeto']) || !isset($body['id_tabela_tarefa'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }

        parent::setTitulo($body['titulo']);
        parent::setDescricao($body['descricao']);
        parent::idProjeto($body['id_projeto']);
        parent::idTabelaTarefa($body['id_tabela_tarefa']);

        $tarefaModel = new Tarefas();
        $create_result = $tarefaModel->create($this->titulo, $this->descricao, $this->id_projeto, $this->id_tabela_tarefa);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result['success']]);
        } else {

            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }

    public function showOne($param){
        $id = $param[0];
        if($id){
            $tarefaModel = new Tarefas();
            $result = $tarefaModel->find($id);
            if (isset($result['success'])) {
                http_response_code(200);
                echo json_encode(['success' => $result['success']]);
            } else {
                http_response_code(500);
                echo json_encode(['error' => $result['error']]);
            }
        }
        http_response_code(500);
        echo json_encode(['error' => 'Error no ID ']);
    }

    public function updateId() {
        $body = json_decode(file_get_contents('php://input'), true);

        // Verificar se o corpo da solicitação contém os campos necessários
        if(!isset($body['id_tarefa']) || !isset($body['novo_id'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor, informe o ID da tarefa e o novo ID']);
            return;
        }

        $tarefaModel = new Tarefas();
        $update_result = $tarefaModel->updateId($body['id_tarefa'], $body['novo_id']);

        if (isset($update_result['success'])) {
            http_response_code(200);
            echo json_encode(['success' => $update_result['success']]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $update_result['error']]);
        }
    }

}
