<?php 

// Permitindo acesso de qualquer origem (não recomendado para produção)
header("Access-Control-Allow-Origin: *");
// Permitindo métodos GET, POST, PUT, DELETE e OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Permitindo cabeçalhos personalizados e os cabeçalhos padrão
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once __DIR__."/vendor/autoload.php";
require_once __DIR__."/src/Router/main.php";


use App\Router\ModelRouter;
use App\Core\Core;

Core::dispatch(ModelRouter::routes());

