<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class TabelaModal extends Model {

    protected $table = 'tabela_tarefa';

    public function tabelaUpdate($id, $titulo, $cor , $id_projeto){
        $tabela = TabelaModal::where('id', $id)->first();

        if(!$tabela){
            http_response_code(404);
            return ['error' => 'Erro ao criar tarefa'];
        }

        $tabela->titulo = $titulo;
        $tabela->id_projeto = $id_projeto;
        $tabela->cor = $cor;

        if ($tabela->save()) {
            return ['success' => 'Tabela atualizada!']; 
        } else {
            return ['error' => 'Erro ao atualizar'];
        }

    }

    public function tabelaDelete($id) {
        $tabela = TabelaModal::where('id', $id)->first();
        
        if (!$tabela) {
            return ['error' => 'Tarefa não encontrada'];
        }
    
        if ($tabela->delete()) {
            return ['success' => 'Tarefa excluída com sucesso'];
        } else {
            return ['error' => 'Erro ao excluir tarefa'];
        }
    }

    public function create($titulo, $id_projeto,$cor) {
        $tarefa = new TabelaModal();
        $tarefa->titulo = $titulo;
        $tarefa->id_projeto = $id_projeto;
        $tarefa->cor = $cor;


        if ($tarefa->save()) {
            return ['success' => 'Tarefa criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar tarefa'];
        }
    }

    public function listAllTablesByProjectId($id_projeto) {

        $tabelas = TabelaModal::where('id_projeto', $id_projeto)->get();
        $result = [];
    
        foreach($tabelas as $tabela){
            $tarefas = Tarefas::where('id_tabela_tarefa', $tabela->id)->get();
            $tarefasArray = [];
    
            foreach($tarefas as $tarefa){
                $equipeTarefa = EquipeTarefaModel::where('id_tarefa', $tarefa->id)
                                                ->select('usuarios.id', 'usuarios.nome', 'usuarios.email', 'usuarios.url_perfil_img')
                                                ->join('usuarios', 'equipe_tarefa.id_usuario', '=', 'usuarios.id')
                                                ->get();
    
                $tarefasArray[] = [
                    "id" => $tarefa->id,
                    "titulo" => $tarefa->titulo,
                    "descricao" => $tarefa->descricao,
                    "equipe_tarefa" => $equipeTarefa,
                ];
            }
    
            $result[] = [
                'id' => $tabela->id,
                'titulo' => $tabela->titulo,
                'cor' => $tabela->cor,
                'tarefas' => $tarefasArray,
            ];
        }
        
        return ['success' => $result];
    }
    
    
}
    
?>
