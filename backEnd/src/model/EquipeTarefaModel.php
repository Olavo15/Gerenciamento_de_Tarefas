<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class equipeTarefaModel extends Model{
    protected $table = 'equipe_tarefa';

    public function create($titulo, $nome, $id_usuario, $id_tarefa){
        $tarefa = new equipeTarefaModel();
        $tarefa->titulo = $titulo;
        $tarefa->nome = $nome;
        $tarefa->id_usuario = $id_usuario;
        $tarefa->id_tarefa = $id_tarefa;
        if ($tarefa->save()) {
            return ['success' => 'Equipe criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar equipe'];
        }
    }

    public function list($id){
        $equipe = equipeTarefaModel::where('id_tarefa', $id)->get();
    }
}