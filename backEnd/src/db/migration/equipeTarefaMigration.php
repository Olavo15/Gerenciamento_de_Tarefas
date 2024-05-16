<?php

require_once __DIR__ . '/../conexao.php';

class MigrationEquipeTarefa {
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\Conexao::getConexao(); 
    }

    public function migration() {
        $sql = "CREATE TABLE equipe_tarefa (
            id INT PRIMARY KEY AUTO_INCREMENT,
            titulo VARCHAR(255),
            nome VARCHAR(255) NOT NULL,
            id_usuario INT,
            FOREIGN KEY (id_usuario) REFERENCES usuario(id),
            id_tarefa INT,
            FOREIGN KEY (id_tarefa) REFERENCES tarefa(id)
        )";

        if (self::$conexao->query($sql) === TRUE) {
            echo "Tabela equipe_tarefa criada com sucesso!.\n";
        } else {
            echo "Erro na criação da tabela: " . self::$conexao->error;
        }
    }
}

$migrationEquipeTarefa = new MigrationEquipeTarefa();

$migrationEquipeTarefa->migration();
?>
