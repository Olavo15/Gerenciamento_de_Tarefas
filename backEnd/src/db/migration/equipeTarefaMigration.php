<?php

require_once __DIR__. '/../conexao.php';

class migrationEquipeTarefa {
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao(); 
    }

    public function migration() {
        $sql = "CREATE TABLE equipe_tarefa (
            id INT PRIMARY KEY,
            titulo VARCHAR(255),
            id_usuario INT,
            FOREIGN KEY (id_usuario) REFERENCES usuario(id)
            id_tarefa INT,
            FOREIGN KEY (id_tarefa) REFERENCES tarefa(id)
        )";

        if (self::$conexao->query($sql) === TRUE) {
            echo "Tabela Projeto criada com sucesso!.\n";
        } else {
            echo "Erro na criação da tabela: " . self::$conexao->error;
        }
    }
}


$migrationEquipeTarefa = new migrationEquipeTarefa();

$migrationEquipeTarefa->migration();
?>
