<?php

namespace App\Controllers;

use App\Entity\equipeProjeto;
use App\model\equipeProjetoModel;

class equipeProjetoController extends equipeProjeto {
    public function create(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['id_usuario']) || !isset($body['id_projeto'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }
        
        parent::setId_usuario($body['id_usuario']);
        parent::setId_projeto($body['id_projeto']);
                
        $equipeProjetoModel = new equipeProjetoModel();
        $create_result = $equipeProjetoModel->create($this->id_usuario, $this->id_projeto);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result['success']]);
        } else {

            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }

    public function listByUserId($param){
        parent::setId_projeto($param[0]);

        $equipeProjetoModel = new equipeProjetoModel();
        $equipeProjetoModel = $equipeProjetoModel->listByUserId($this->id_projeto);
        
        if (isset($equipeProjetoModel['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $equipeProjetoModel['success']]);
        } else {

            http_response_code(500);
            echo json_encode(['error' => $equipeProjetoModel['error']]);
        }
    }
}