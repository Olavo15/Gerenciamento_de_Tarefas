<?php

require_once __DIR__. '/../conexao.php';

class MigrationEquipeTarefa {
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao(); 
    }

    public function migration() {
        $sql = "CREATE TABLE equipe_projeto (
            id INT PRIMARY KEY AUTO_INCREMENT,
            id_usuario INT,
            FOREIGN KEY (id_usuario) REFERENCES usuario(id),
            id_projeto INT,
            FOREIGN KEY (id_projeto) REFERENCES projeto(id)
        )";

        if (self::$conexao->query($sql) === TRUE) {
            echo "Tabela equipe_projeto criada com sucesso!.\n";
        } else {
            echo "Erro na criação da tabela: " . self::$conexao->error;
        }
    }
}


$migrationEquipeTarefa = new MigrationEquipeTarefa();

$migrationEquipeTarefa->migration();
?>
