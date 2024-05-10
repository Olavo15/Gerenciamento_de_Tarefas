<?php

try {
    require_once __DIR__.'/../backEnd/DB/Conexao.php';
} catch (Exception $e) {
    echo 'Erro ao incluir o arquivo de conexão: ',  $e->getMessage(), "\n";
    exit;
}


class Autenticacao {
    private $mysqli;

    public function __construct($conexao) {
        $this->mysqli = $conexao;
    }

    public function autenticar($email, $senha) {
        if(strlen($email) == 0){
            return "Preencha o campo email";
        } elseif(strlen($senha) == 0){
            return "Preencha o campo senha";
        } else {
            $email = $this->mysqli->real_escape_string($email);
            $senha = $this->mysqli->real_escape_string($senha);

            $sql_code = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
            $sql_query = $this->mysqli->query($sql_code) or die("Falha na execução do código SQL: ".$this->mysqli->error);

            if($sql_query->num_rows > 0) {
                return "Usuário autenticado com sucesso";
            } else {
                return "Email ou senha incorretos";
            }
        }
    }
}


if(isset($_POST['email']) && isset($_POST['senha'])) {
    $autenticacao = new Autenticacao($mysqli);
    $mensagem = $autenticacao->autenticar($_POST['email'], $_POST['senha']);
    echo $mensagem;
}

?>
