<?php

// olavo: "localhost", "olavo", "QnE8UA", "Passageiro"
// ari: "localhost", "sea", "S!@sytem2024", "SEA_SYSTEM
require_once __DIR__.('/config.php');

class Conexao{
    private static $conexao;

    public static function getConexao(){
        global $db_host, $db_user, $db_password, $db_name;
        if (!self::$conexao){
            self::$conexao = new mysqli($db_host, $db_user, $db_password, $db_name);
            if (self::$conexao->connect_error) {
                die("Erro ao conectar ao banco de dados: " . self::$conexao->connect_error);
            }
        }
        return self::$conexao;
    }
}
?>