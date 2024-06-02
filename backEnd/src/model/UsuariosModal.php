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
        $novoUsuario->url_perfil_img = 'https://i.pinimg.com/564x/7c/06/76/7c0676b215b591d2c6043596da128f96.jpg';
    
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
                'nome' => $usuario->nome,
                'url_perfil_img' => $usuario->url_perfil_img
            ];
            $secret_key = '244_NAO_E_CRIME'; 
            // $token = \Firebase\JWT\JWT::encode($payload, $secret_key, 'HS256');
    
            return ['success' => 'Login bem-sucedido', 'token' => $payload];
        } else {
            return ['error' => 'Credenciais inválidas'];
        }
    }

    public function pesquisa($termo) {
        if(strlen($termo) < 2) {
            $usuarios = UsuariosModal::take()
                ->select('id', 'nome', 'email', 'url_perfil_img')
                ->get();
            return ['success' => $usuarios];
        } else {
            $usuarios = UsuariosModal::where('nome', 'LIKE', "%$termo%")
                ->orWhere('email', 'LIKE', "%$termo%")
                ->select('id', 'nome', 'email', 'url_perfil_img')
                ->get();
            if ($usuarios->isEmpty()) {
                return ['success' => []];
            } else {
                return ['success' => $usuarios];
            }
        }
    }

    public function updateImg($id, $url) {
        $usuario = UsuariosModal::find($id);
        if (!$usuario) {
            return ['error' => 'Usuário não encontrado'];
        }
        $usuario->nome = $url;
        if ($usuario->save()) {
            return ['success' => 'Nome do usuário atualizado com sucesso'];
        } else {
            return ['error' => 'Erro ao atualizar o nome do usuário'];
        }
    }
    
    
    
    
}
