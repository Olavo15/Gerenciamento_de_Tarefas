<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class ProjetoModel extends Model{
    protected $table = 'projeto';

    public function create($titulo, $descricao, $id_usuario){
        $projeto = new ProjetoModel();
        $projeto->titulo = $titulo;
        $projeto->descricao = $descricao;
        $projeto->id_usuario = $id_usuario;
        
        if ($projeto->save()) {
            return ['success' => 'Projeto criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar projeto'];
        }
    }

    public function listUserById($id){
        $projetos = ProjetoModel::where('id_usuario', $id)->get();

        if ($projetos->isEmpty()) {
            return ['error' => 'Nenhum projeto encontrado'];
        } else {
            return ['success' => 'Projetos encontrados', 'projetos' => $projetos];
        }
    }

    public function deletarPorId($id){
        $projeto = ProjetoModel::find($id);

        if ($projeto) {
            $projeto->delete();
            return ['success' => 'Projeto deletado com sucesso'];
        } else {
            return ['error' => 'Nenhum projeto encontrado com esse ID'];
        }
    }
}
