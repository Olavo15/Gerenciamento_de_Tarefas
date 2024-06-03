<?php

namespace App\Controllers;

use App\Entity\Tabela;
use App\model\TabelaModal;

class TabelaController extends Tabela {

    public function create(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['titulo']) || !isset($body['id_projeto']) || !isset($body['cor'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }
        
        parent::setTitulo($body['titulo']);
        parent::setIdProjeto($body['id_projeto']);
        parent::setCor($body['cor']);

        $modal = new TabelaModal();
        $result = $modal->create($this->titulo, $this->id_projeto, $this->cor);

        if (isset($result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $result['success']]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $result['error']]);
        }
    }

    public function listAllTablesByProjectId($param){
        $id = $param[0];
        $modal = new TabelaModal();
        $result = $modal->listAllTablesByProjectId($id);
        if (isset($result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $result['success']]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $result['error']]);
        }
    }


    public function update(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['titulo']) || !isset($body['cor']) || !isset($body['id'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor, informe todos os campos corretamente!']);
            return;
        }


        parent::setTitulo($body['titulo']);
        parent::setCor($body['cor']);


        $modal = new TabelaModal();
        $result = $modal->tabelaUpdate($body['id'], $this->titulo, $this->cor);

        if (isset($result['success'])) {
            http_response_code(200);
            echo json_encode(['success' => $result['success']]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $result['error']]);
        }
    }

    public function deleteTabela($id) {
        $modal = new TabelaModal();
        $result = $modal->tabelaDelete($id[0]);

        if (isset($result['success'])) {
            http_response_code(200);
            echo json_encode(['success' => $result['success']]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $result['error']]);
        }
    }

}
