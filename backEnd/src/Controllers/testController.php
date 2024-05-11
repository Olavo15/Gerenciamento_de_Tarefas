<?php

namespace App\Controllers;

use App\http\Request\JsonRequest;
use App\http\Response\JsonResponse;

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
}
