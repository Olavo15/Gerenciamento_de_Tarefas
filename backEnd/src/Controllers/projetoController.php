<?php

namespace App\Controllers;

use App\Entity\Projeto;
use App\Model\ProjetoModel;

class ProjetoController extends Projeto {
    public function create(){
        $body = json_decode(file_get_contents('php://input'), true);
        if(!isset($body['titulo']) || !isset($body['descricao'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Por favor informe todos os campos corretamente!']);
            return;
        }
        
        $titulo = $body['titulo'];
        $descricao = $body['descricao'];

        $projeto = new Projeto();
        $projeto->setTitulo($titulo, \App\db\Conexao::getConexao()); 
        $projeto->setDescricao($descricao, \App\db\Conexao::getConexao()); 

        $projetoModel = new ProjetoModel();
        $create_result = $projetoModel->create($projeto->titulo, $projeto->descricao);

        if (isset($create_result['success'])) {
            http_response_code(201);
            echo json_encode(['success' => $create_result['success']]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $create_result['error']]);
        }
    }
}
