<?php

namespace App\Controllers;

use App\Entity\equipeTarefa;
use App\model\equipeTarefaModel;

class equipeTarefaController extends equipeTarefa {
    public function create(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['titulo']) || !isset($body['nome'])||!isset($body['id_usuario']) || !isset($body['id_tarefa'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }
        
        parent::setTitulo($body['titulo']);
        parent::setNome($body['nome']);
        parent::setId_usuario($body['id_usuario']);
        parent::setId_tarefa($body['id_tarefa']);
                

        $equipeTarefaModel = new equipeTarefaModel();
        $create_result = $equipeTarefaModel->create($this->titulo, $this->nome,$this->id_usuario,$this->id_tarefa);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result['success']]);
        } else {

            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }


    // função para lista todos os membros da tarefa, receber id da tarefa como param
    
}
