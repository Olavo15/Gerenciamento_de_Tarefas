<?php

require_once __DIR__ . '/../conexao.php';

class MigrationUsuario {
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao(); 
    }

    public function migration() {
        $sql = "CREATE TABLE tarefa (
            id INT PRIMARY KEY AUTO_INCREMENT,
            titulo VARCHAR(255),
            descricao TEXT,
            progresso BOOLEAN NOT NULL
        )";

        if (self::$conexao->query($sql) === TRUE) {
            echo "Tabela tarefa criada com sucesso!.\n";
        } else {
            echo "Erro na criação da tabela: " . self::$conexao->error;
        }
    }
}

$migrationUsuario = new MigrationUsuario();

$migrationUsuario->migration();
?>
