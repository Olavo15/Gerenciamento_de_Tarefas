<?php

namespace App\model;
use App\db\conexao;


class projetoModel{
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao();
    }

    public function create($titulo, $descricao) {

        $sql = "INSERT INTO projeto (titulo, descricao) VALUES (?, ?)";
        $stmt = self::$conexao->prepare($sql);
        $stmt->bind_param("ss", $titulo, $descricao);
        
        if ($stmt->execute()) {
            return ['success' => 'Projeto criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar projeto'];
        }
    }
}
?>
