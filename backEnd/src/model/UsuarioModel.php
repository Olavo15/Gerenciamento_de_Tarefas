<?php 

namespace App\model;
use App\db\conexao;

class UsuarioModel{
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao();
    }

    public function create($nome,$senha,$email) {
        $sql_verificar_email = "SELECT id FROM usuario WHERE email = ?";
        $stmt_verificar_email = self::$conexao->prepare($sql_verificar_email);
        $stmt_verificar_email->bind_param("s", $email);
        $stmt_verificar_email->execute();
        $result_verificar_email = $stmt_verificar_email->get_result();

        if ($result_verificar_email->num_rows > 0) {
            return ['error' => 'Já existe um usuário com esse email'];
        }

        $senha_criptografada = password_hash($senha, PASSWORD_DEFAULT);

        $sql = "INSERT INTO usuario (nome, senha, email) VALUES (? , ?, ?)";
        $stmt = self::$conexao->prepare($sql);
        $stmt->bind_param("sss", $nome, $senha_criptografada, $email);
        
        if ($stmt->execute()) {
            return ['success' => 'Usuário criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar usuário'];
        }
    }

    public function login($email, $senha) {
        $sql_buscar_usuario = "SELECT id,nome, senha  FROM usuario WHERE email = ?";
        $stmt_buscar_usuario = self::$conexao->prepare($sql_buscar_usuario);
        $stmt_buscar_usuario->bind_param("s", $email);
        $stmt_buscar_usuario->execute();
        $result_buscar_usuario = $stmt_buscar_usuario->get_result();
    
        if ($result_buscar_usuario->num_rows == 0) {
            return ['error' => 'Usuário não encontrado'];
        }
    
        $usuario = $result_buscar_usuario->fetch_assoc();
        $id_usuario = $usuario['id'];
        $senha_hash = $usuario['senha'];
        $nome = $usuario['nome'];

        if (password_verify($senha, $senha_hash)) {
            $payload = [
                'exp' => time() + 3600,
                'id_usuario' => $id_usuario,
                'nome' => $nome
            ];
            $secret_key = '244_NAO_E_CRIME';
            $token = \Firebase\JWT\JWT::encode($payload, $secret_key, 'HS256');
    
            return ['success' => 'Login bem-sucedido', 'token' => $token];
        } else {
            return ['error' => 'Credenciais inválidas'];
        }
    }
    

}