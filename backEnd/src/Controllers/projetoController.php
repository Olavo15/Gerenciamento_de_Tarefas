<?php

namespace App\Controllers;

use App\Entity\projeto;
use App\model\projetoModel;

class projetoController extends projeto {
    public function create(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['titulo']) || !isset($body['descricao']) || !isset($body['id_usuario'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }
        
        parent::setTitulo($body['titulo']);
        parent::setDescricao($body['descricao']); 
        parent::setIdUsuario($body['id_usuario']);

        $projetoModel = new ProjetoModel();
        $create_result = $projetoModel->create($this->titulo, $this->descricao, $this->id_usuario);

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

        $projetoModel = new ProjetoModel();
        $create_result = $projetoModel->listUserById($this->id);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }
    public function deletar() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = json_decode(file_get_contents('php://input'), true);
            if (isset($input['id'])) {
                $id = $input['id'];
                
                $projetoModel = new projetoModel();
                $resultado = $projetoModel->deletarProjetoPorId($id);
                
                echo json_encode($resultado);
            } else {
                echo json_encode(['error' => 'ID do projeto não fornecido.']);
            }
        } else {
            echo json_encode(['error' => 'Método de requisição inválido.']);
        }
    }
}