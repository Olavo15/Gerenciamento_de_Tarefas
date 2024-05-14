<?php

namespace App\model;
use App\db\conexao;


class tarefaModel{
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao();
    }

    public function create($nome, $area) {

        $sql = "INSERT INTO equipe (nome, area) VALUES (?, ?)";
        $stmt = self::$conexao->prepare($sql);
        $stmt->bind_param("ss", $nome, $area);
        
        if ($stmt->execute()) {
            return ['success' => 'Equipe criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar equipe'];
        }
    }
}
?>
