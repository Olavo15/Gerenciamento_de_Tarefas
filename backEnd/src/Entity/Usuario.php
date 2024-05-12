<?php 
namespace App\Entity;

class Usuario {
    protected $nome;
    protected $senha;
    protected $email;

    public function setNome($nome) {
        if (strlen($nome) < 3) {
            http_response_code(400);
            echo json_encode(['error' => 'Nome de usuario deve ter no minimo 3 letras']);
            exit;
        }

        $this->nome = $nome;
    }

    public function setSenha($senha) {
        if (!preg_match('/^(?=.*[A-Z])(?=.*[0-9].*[0-9].*[0-9]).{8,}$/', $senha)) {
            http_response_code(400);
            echo json_encode(['error' => 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e três números.']);

        }
        $this->senha = $senha;
    }

    public function setEmail($email) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'O email fornecido é inválido.']);

        }
        $this->email = $email;
    }
}
