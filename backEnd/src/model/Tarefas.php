<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class Tarefas extends Model {

    protected $table = 'tarefas';

    public function create($titulo, $descricao, $progresso) {
        $tarefa = new Tarefas();
        $tarefa->titulo = $titulo;
        $tarefa->descricao = $descricao;
        $tarefa->progresso = $progresso;

        if ($tarefa->save()) {
            return ['success' => 'Tarefa criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar tarefa'];
        }
    }
}
?>
