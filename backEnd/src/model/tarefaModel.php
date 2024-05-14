<?php

namespace App\model;
use App\db\conexao;


class projetoModel{
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao();
    }

    public function create($titulo, $descricao,$progresso) {

        $sql = "INSERT INTO tarefa (titulo, descricao, progresso) VALUES (?, ?, ?)";
        $stmt = self::$conexao->prepare($sql);
        $stmt->bind_param("sss", $titulo, $descricao, $progresso);
        
        if ($stmt->execute()) {
            return ['success' => 'Tarefa criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar tarefa'];
        }
    }
}
?>
