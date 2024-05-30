<?php 
require_once __DIR__."/vendor/autoload.php";
require_once __DIR__. '/src/config/boostrap.php';

use App\Migrations\Usuarios;
use App\Migrations\Projeto;

$usuarioMigration = new Usuarios();
$usuarioMigration->up();
echo'Tabela Usuarios criado com sucesso!' . "\n";


$projetoMigration = new Projeto();
$projetoMigration->up();
echo'Tabela Projeto criado com sucesso!' . "\n";
