<?php

require_once __DIR__. '/../conexao.php';

class MigrationUsuario {
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao(); 
    }

    public function migration() {
        $sql = "CREATE TABLE usuario(
            id INT PRIMARY KEY AUTO_INCREMENT, 
            nome VARCHAR(255) NOT NULL,  
            senha VARCHAR(255) NOT NULL,  
            email VARCHAR(255) NOT NULL  
          );";
        
        if (self::$conexao->query($sql) === TRUE) {
            echo "Tabela Usuario criada com sucesso!.\n";
        } else {
            echo "Erro na criação da tabela: " . self::$conexao->error;
        }
    }
}

$migrationUsuario = new MigrationUsuario();
$migrationUsuario->migration();

