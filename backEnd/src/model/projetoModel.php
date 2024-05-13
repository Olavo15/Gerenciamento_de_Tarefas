<?php

namespace App\model;
use App\db\conexao;


class projetoModel{
    protected static $conexao;

    public function __construct(){
        self::$conexao = \App\db\conexao::getConexao();
    }

    public function create($titulo, $descricao) {

        $sql = "INSERT INTO projeto (titulo, descricao) VALUES (?, ?)";
        $stmt = self::$conexao->prepare($sql);
        $stmt->bind_param("ss", $titulo, $descricao);
        
        if ($stmt->execute()) {
            return ['success' => 'Projeto criado com sucesso'];
        } else {
            return ['error' => 'Erro ao criar projeto'];
        }
    }

    public function listUserById($id) {

        $sql = "SELECT PJ.id, PJ.titulo, PJ.descricao, PJ.id_usuario as dono, EQ.id_projeto as pjTime
        FROM projeto AS PJ
        JOIN equipe_projeto AS EQ ON PJ.id_usuario = EQ.id_usuario
        WHERE PJ.id_usuario = ?;
        ";
        $stmt = self::$conexao->prepare($sql);
        $stmt->bind_param("s", $id);
        $stmt->execute();
        $resultProjetos = $stmt->get_result();
    
        if ($resultProjetos->num_rows == 0) {
            $dados = $resultProjetos->fetch_all(MYSQLI_ASSOC);
            return ['success' => 'Projeto criado com sucesso','dados',$dados];
        } else {
            return ['error' => 'Nenhum projeto encontrado!'];
        }
    }
}
?>
