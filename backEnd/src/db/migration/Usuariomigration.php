<?php

require_once __DIR__. '/../Conexao.php';

class MigrationUsuario {
    protected $conexao;

    public function __construct() {
        $this->conexao = Conexao::getConexao();
    }

    public function migration() {
        $sql = "CREATE TABLE usuario(
            id INT PRIMARY KEY AUTO_INCREMENT,  
            nome VARCHAR(255) NOT NULL,  
            senha VARCHAR(255) NOT NULL,  
            email VARCHAR(255) NOT NULL  
          );";

        if ($this->conexao->query($sql) === TRUE) {
            echo "Tabela Usuario criada com sucesso!.\n";
        } else {
            echo "Erro na criação da tabela: " . $this->conexao->error;
        }
    }
}


$migrationUsuario = new MigrationUsuario();

$migrationUsuario->migration();
?>