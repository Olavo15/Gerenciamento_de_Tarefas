<?php

namespace App\model;
use App\db\conexao;

class equipeTarefaModel{
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao();
    }

    public function create($titulo, $nome, $id_tarefa){
        $sql = "INSERT INTO equipe_tarefa (titulo, nome, id_tarefa) VALUES (?, ?, ?)";
        $stmt = self::$conexao->prepare($sql);
        $stmt->bind_param("sss", $titulo, $nome, $id_tarefa);
        
        if ($stmt->execute()) {
            return ['success' => 'Equipe criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar equipe'];
        }
    }
}