<?php 

if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide se a origem em $_SERVER['HTTP_ORIGIN'] é uma que você deseja permitir
    // Se sim, permita o acesso definindo o cabeçalho Access-Control-Allow-Origin
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache por 1 dia
}

// Os cabeçalhos Access-Control são recebidos durante as solicitações OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Define os métodos HTTP que você deseja permitir
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE , OPTIONS");
    }
    // Define os cabeçalhos HTTP que você deseja permitir
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
    // Termina a execução do script
    exit(0);
}

require_once __DIR__."/vendor/autoload.php";
require_once __DIR__."/src/Router/main.php";
require_once __DIR__. '/src/config/boostrap.php';

use App\Router\ModelRouter;
use App\Core\Core;


Core::dispatch(ModelRouter::routes());

