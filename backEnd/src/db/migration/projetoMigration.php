<?php

require_once __DIR__. '/../Conexao.php';

class MigrationUsuario {
    protected $conexao;

    public function __construct() {
        $this->conexao = Conexao::getConexao();
    }

    public function migration() {
        $sql = "CREATE TABLE projeto (
            id INT PRIMARY KEY,
            titulo VARCHAR(255),
            descricao TEXT,
            id_equipe INT,
            FOREIGN KEY (id_equipe) REFERENCES equipe(id)
        )";

        if ($this->conexao->query($sql) === TRUE) {
            echo "Tabela Projeto criada com sucesso!.\n";
        } else {
            echo "Erro na criação da tabela: " . $this->conexao->error;
        }
    }
}


$migrationUsuario = new MigrationUsuario();

$migrationUsuario->migration();
?>