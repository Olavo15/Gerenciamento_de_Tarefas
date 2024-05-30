<?php 

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class UsuariosModal extends Model {
    protected $table = 'usuarios';

    public function create($nome, $senha, $email) {
        $usuarioExistente = UsuariosModal::where('email', $email)->first();
        if ($usuarioExistente) {
            return ['error' => 'Já existe um usuário com esse email'];
        }
    
        $senhaCriptografada = password_hash($senha, PASSWORD_DEFAULT);
    
        $novoUsuario = new UsuariosModal();
        $novoUsuario->nome = $nome;
        $novoUsuario->senha = $senhaCriptografada;
        $novoUsuario->email = $email;
    
        if ($novoUsuario->save()) {
            return ['success' => 'Usuário criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar usuário'];
        }
    }

    public function login($email, $senha) {
        $usuario = UsuariosModal::where('email', $email)->first();
    
        if (!$usuario) {
            return ['error' => 'Usuário não encontrado'];
        }
    
        if (password_verify($senha, $usuario->senha)) {
            $payload = [
                'exp' => time() + 3600,
                'id_usuario' => $usuario->id,
                'nome' => $usuario->nome
            ];
            $secret_key = '244_NAO_E_CRIME'; 
            // $token = \Firebase\JWT\JWT::encode($payload, $secret_key, 'HS256');
    
            return ['success' => 'Login bem-sucedido', 'token' => $payload];
        } else {
            return ['error' => 'Credenciais inválidas'];
        }
    }
}
