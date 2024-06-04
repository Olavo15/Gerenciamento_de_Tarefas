<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class equipeProjetoModel extends Model
{
    protected $table = 'equipe_projeto';

    public function create($id_usuario, $id_projeto)
    {
        $model = new equipeProjetoModel();
        $model->id_usuario = $id_usuario;
        $model->id_projeto = $id_projeto;

        if ($model->save()) {
            return ['success' => 'Usuário adicionado!'];
        } else {
            return ['error' => 'Erro ao adicionar usuário'];
        }
    }

    public function listByUserId($id_projeto)
    {
    $users = equipeProjetoModel::join('usuarios', 'usuarios.id', '=', 'equipe_projeto.id_usuario')
                                ->where('id_projeto', intval($id_projeto))
                                ->select('usuarios.id','usuarios.url_perfil_img','usuarios.nome', 'usuarios.email')
                                ->get();
        if ($users) {
            return ['success' => $users];
        } else {
            return ['error' => 'Erro ao listar usuários'];
        }
    }
    
}
