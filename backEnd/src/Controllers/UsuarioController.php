<?php

namespace App\Controllers;

use App\Entity\Usuario;
use App\model\UsuarioModel;

class UsuarioController extends Usuario {
    public function login(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['email']) || !isset($body['senha'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe os campos corretos!']);
            return;
        }
        
        $email = $body['email'];
        $senha = $body['senha'];

        $usuarioModel = new UsuarioModel();
        $login_result = $usuarioModel->login($email, $senha);

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

        $nome = $body['nome'];
        $senha = $body['senha'];
        $email = $body['email'];

        $usuarioModel = new UsuarioModel();
        $create_result = $usuarioModel->create($nome, $senha, $email);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result['success']]);
        } else {

            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }
}
