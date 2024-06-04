<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class equipeTarefaModel extends Model{
    protected $table = 'equipe_tarefa';

    public function create($titulo, $nome, $id_usuario, $id_tarefa){
        $tarefa = new equipeTarefaModel();
        $sql = "INSERT INTO equipe_tarefa (titulo, nome, id_usuario, id_tarefa) VALUES (?, ?, ?, ?)";
        $stmt = self::$conexao->prepare($sql);
        $stmt->bind_param("ssss", $titulo, $nome, $id_usuario, $id_tarefa);
        
        if ($stmt->execute()) {
            return ['success' => 'Equipe criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar equipe'];
        }
    }
}