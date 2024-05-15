<?php

namespace App\model;
use App\db\conexao;


class equipeProjetoModel{
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao();
    }

    public function create($id_usuario, $id_projeto) {

        $sql = "INSERT INTO equipe_projeto (id_usuario, id_projeto) VALUES (?, ?)";
        $stmt = self::$conexao->prepare($sql);
        $stmt->bind_param("ss", $id_usuario, $id_projeto);
        
        if ($stmt->execute()) {
            return ['success' => 'Equipe criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar equipe'];
        }
    }
}
?>
