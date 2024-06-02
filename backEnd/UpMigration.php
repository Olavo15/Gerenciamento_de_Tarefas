<?php
require_once __DIR__."/vendor/autoload.php";
require_once __DIR__. '/src/config/boostrap.php';

use App\Migrations\Usuarios;
use App\Migrations\Projeto;
use App\Migrations\tabelaTarefaMigration;
use App\Migrations\tarefaMigration;
use App\Migrations\MigrationEquipeProjeto;
use App\Migrations\MigrationEquipeTarefa;

// Instância e execução das migrações
$usuariosMigration = new Usuarios();
$usuariosMigration->up();
echo "Progresso: 16%\n";
sleep(1);

$projetoMigration = new Projeto();
$projetoMigration->up();
echo "Progresso: 33%\n";
sleep(1);

$tabelaTarefaMigration = new tabelaTarefaMigration();
$tabelaTarefaMigration->up();
echo "Progresso: 50%\n";
sleep(1);

$tarefaMigration = new tarefaMigration();
$tarefaMigration->up();
echo "Progresso: 66%\n";
sleep(1);

$migrationEquipeProjeto = new MigrationEquipeProjeto();
$migrationEquipeProjeto->up();
echo "Progresso: 83%\n";
sleep(1);

$migrationEquipeTarefa = new MigrationEquipeTarefa();
$migrationEquipeTarefa->up();
echo "Progresso: 100%\n";

echo "Tabelas criadas com sucesso!!!\n";
?>
