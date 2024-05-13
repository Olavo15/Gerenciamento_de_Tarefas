<?php

require_once __DIR__. '/../conexao.php';

class MigrationUsuario {
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao(); 
    }

    public function migration() {
        $sql = "CREATE TABLE equipe (
            id INT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(255) NOT NULL,
            area VARCHAR(255) NOT NULL,
            id_usuario INT,
            FOREIGN KEY (id_usuario) REFERENCES usuario(id)
        )";

        if (self::$conexao->query($sql) === TRUE) {
            echo "Tabela Equipe criada com sucesso!.\n";
        } else {
            echo "Erro na criação da tabela: " . self::$conexao->error;
        }
    }
}


$migrationUsuario = new MigrationUsuario();

$migrationUsuario->migration();
?>
