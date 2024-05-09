<?php

// olavo: "localhost", "olavo", "QnE8UA", "Passageiro"
// ari: "localhost", "sea", "S!@sytem2024", "SEA_SYSTEM

class Conexao {
    private static $conexao;

    public static function getConexao(){
        if (!self::$conexao){
            self::$conexao = new mysqli("localhost", "olavo", "QnE8UA", "GDT");
            if (self::$conexao->connect_error) {
                die("Erro ao conectar ao banco de dados: " . self::$conexao->connect_error);
            }
        }
        return self::$conexao;
    }
}
?>
