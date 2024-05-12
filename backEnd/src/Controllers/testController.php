<?php

namespace App\Controllers;

use \Firebase\JWT\JWT;

class TestController {

    public function test() {
        echo 'oi';
    }

    public function body() {
        // corpo da requisição
        $bay = json_decode(file_get_contents('php://input'), true);
        echo json_encode();
    }

    // http://localhost:8080/e/3 
    // o 3 seria o id!
    // ele separa o id para realizar uma consulta no banco ou qualquer outra logica 
    public function param($param) {
        if (isset($param[0])) {
            echo $param[0];
        } else {
            echo "no";
        }
    }

    public function tokenJWT(){
        $body = json_decode(file_get_contents('php://input'), true);
        $usuario['exp'] = time() + 3600;
        $secret_key = 'sua_chave_secreta';
        $token = JWT::encode($body, $secret_key, 'HS256');
        echo json_encode($token);
    }
}
