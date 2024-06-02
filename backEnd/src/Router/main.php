<?php 

use App\Router\ModelRouter;

ModelRouter::post('/login', 'UsuarioController@login');
ModelRouter::post('/create', 'UsuarioController@create');
ModelRouter::post('/usuarios', 'UsuarioController@pesquisa');

ModelRouter::post('/projeto', 'projetoController@create');
ModelRouter::delete('/projeto', 'projetoController@deletar');
ModelRouter::get('/projeto/{id}', 'projetoController@funcao');
ModelRouter::get('/projetos/{id}', 'projetoController@listByUserId');


ModelRouter::post('/tarefa', 'tarefaController@create');
ModelRouter::get('/tarefa/{id}', 'tarefaController@funcao');
ModelRouter::get('/tarefas', 'tarefasController@funcao');

ModelRouter::get('/tabelas/{id}', 'TabelaController@listAllTablesByProjectId');
ModelRouter::post('/tabela', 'TabelaController@create');


ModelRouter::post('/equipeprojeto', 'equipeProjetoController@create');
ModelRouter::get('/equipeprojeto/{id}', 'equipeProjetoController@listByUserId');

ModelRouter::Post('/equipetarefa', 'equipeTarefaController@create');