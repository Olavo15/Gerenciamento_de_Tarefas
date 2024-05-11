<?php 

use App\Router\ModelRouter;

ModelRouter::get('/', 'homeController@index');
ModelRouter::get('/e', 'testController@test');
ModelRouter::get('/e/{id}', 'testController@param');
ModelRouter::post('/e', 'testController@body');

