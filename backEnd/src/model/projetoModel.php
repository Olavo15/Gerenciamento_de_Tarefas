<?php

namespace App\model;
use App\db\conexao;


class ProjetoModel{
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao();
    }

    public function create($titulo, $descricao) {
        
        $sql_verificar_titulo = "SELECT id FROM projeto WHERE titulo = ?";
        $stmt_verificar_titulo = self::$conexao->prepare($sql_verificar_titulo);
        $stmt_verificar_titulo->bind_param("s", $titulo);
        $stmt_verificar_titulo->execute();
        $result_verificar_titulo = $stmt_verificar_titulo->get_result();

        if ($result_verificar_titulo->num_rows > 0) {
            return ['error' => 'Já existe um projeto com esse título'];
        }

        
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
