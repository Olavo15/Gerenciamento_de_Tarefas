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
        $projetosDoUsuario = ProjetoModel::where('id_usuario', $id)->get();
    
        $projetosParticipantes = ProjetoModel::join('equipe_projeto', 'projeto.id', '=', 'equipe_projeto.id_projeto')
                                            ->where('equipe_projeto.id_usuario', $id)
                                            ->get();
    
        // Combina os resultados
        $todosOsProjetos = $projetosDoUsuario->merge($projetosParticipantes);
    
        if ($todosOsProjetos->isEmpty()) {
            return ['error' => 'Nenhum projeto encontrado'];
        } else {
            return ['success' => 'Projetos encontrados', 'projetosUsuario' => $projetosDoUsuario , 'projetosParticipando' => $projetosParticipantes];
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
