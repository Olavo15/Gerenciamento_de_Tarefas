<?php

require_once __DIR__. '/../Conexao.php';

class MigrationUsuario {
    protected static $conexao;

    public function __construct() {
        self::$conexao = \App\db\conexao::getConexao();
    }

    public function migration() {
        $sql = "CREATE TABLE tarefa (
            id INT PRIMARY KEY,
            titulo VARCHAR(255),
            descricao TEXT,
            id_equipe INT,
            FOREIGN KEY (id_equipe) REFERENCES Equipe(id)
        )";

        if (self::$conexao->query($sql) === TRUE) {
            echo "Tabela ??? criada com sucesso!.\n";
        } else {
            echo "Erro na criação da tabela: " . self::$conexao->error;
        }
    }
}


$migrationUsuario = new MigrationUsuario();

$migrationUsuario->migration();
?>