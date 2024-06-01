<?php

namespace App\Controllers;

use App\Entity\Usuario;
use App\model\UsuariosModal;

class UsuarioController extends Usuario {
    public function login(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['email']) || !isset($body['senha'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe os campos corretos!']);
            return;
        }
        
        parent::setSenha($body['senha']);
        parent::setEmail($body['email']);

        $usuarioModel = new UsuariosModal();
        $login_result = $usuarioModel->login($this->email, $this->senha);

        if (isset($login_result['success'])) {
            echo json_encode(['token' => $login_result['token']]);
        } else {
            http_response_code(401); 
            echo json_encode(['error' => $login_result['error']]);
        }
    }

    public function create(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['nome']) || !isset($body['senha']) || !isset($body['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }
        
        parent::setNome($body['nome']);
        parent::setSenha($body['senha']);
        parent::setEmail($body['email']);

        $usuarioModel = new UsuariosModal();
        $create_result = $usuarioModel->create($this->nome, $this->senha, $this->email);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result['success']]);
        } else {

            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }

    public function pesquisa(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['termo'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }
        $modal = new UsuariosModal();
        $resultPesquisa = $modal->pesquisa($body['termo']);
        if (isset($resultPesquisa['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $resultPesquisa['success']]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }
}
