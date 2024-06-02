<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class Tarefas extends Model {

    protected $table = 'tarefas';

    public function create($titulo, $descricao, $progresso, $id_usuario, $id_projeto, $id_tabela_tarefa) {
        $tarefa = new Tarefas();
        $tarefa->titulo = $titulo;
        $tarefa->descricao = $descricao;
        $tarefa->id_equipe_tarefa = $id_equipe_tarefa;
        $tarefa->id_projeto = $id_projeto;
        $tarefa->id_tabela_tarefa = $id_tabela_tarefa;


        if ($tarefa->save()) {
            return ['success' => 'Tarefa criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar tarefa'];
        }
    }
}
?>
