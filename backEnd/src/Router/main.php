<?php 

use App\Router\ModelRouter;

ModelRouter::post('/login', 'UsuarioController@login');
ModelRouter::post('/create', 'UsuarioController@create');

ModelRouter::post('/projeto', 'projetoController@create');
ModelRouter::get('/projeto/{id}', 'projetoController@funcao');
ModelRouter::get('/projetos/{id}', 'projetoController@listByUserId');

ModelRouter::get('/projetos/equipe/membros/{id}', 'equipeProjetoController@funcao'); // lista membros do projeto do id
ModelRouter::post('/projetos/equipe/membro', 'equipeProjetoController@funcao'); // adicionar membro ao projeto 


ModelRouter::post('/tarefa', 'tarefaController@create');
ModelRouter::get('/tarefa/{id}', 'tarefaController@funcao');
ModelRouter::get('/tarefas', 'tarefasController@funcao');

ModelRouter::get('/tarefas/equipe/membros/{id}', 'equipeTarefaController@funcao'); // lista membros do Tarefa do id
ModelRouter::post('/tarefas/equipe/membro', 'equipeTarefaController@funcao'); // adicionar membro ao Tarefa 

ModelRouter::post('/equipeprojeto', 'equipeProjetoController@create');

ModelRouter::Post('/equipetarefa', 'equipeProjetoController');