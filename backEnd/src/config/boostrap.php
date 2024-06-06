<?php 

require_once __DIR__. '/../../vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

// $capsule->addConnection([
//     'driver' => 'mysql',
//     'host' => 'localhost',
//     'database' => 'pedro',
//     'username' => 'root',
//     'password' => '',
//     'charset' => 'utf8',
//     'collation' => 'utf8_unicode_ci',
//     'prefix' => '',
// ]);

// $capsule->addConnection([
//     'driver' => 'mysql',
//     'host' => 'localhost',
//     'database' => 'GDT',
//     'username' => 'olavo',
//     'password' => 'QnE8UA',
//     'charset' => 'utf8',
//     'collation' => 'utf8_unicode_ci',
//     'prefix' => '',
// ]);

// depois de configurar procura um arquivo chamado UpMigration.php ele vai ta na raiz fora do src!!

$capsule->addConnection([
    'driver' => 'mysql',
    'host' => 'localhost',
    'database' => 'gerenciador_tarefas',
    'username' => 'root',
    'password' => 'aristoteles',
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => '',
]);

// $capsule->addConnection([
//     'driver' => 'mysql',
//     'host' => 'localhost',
//     'database' => 'sea',
//     'username' => 'root',
//     'password' => '',
//     'charset' => 'utf8',
//     'collation' => 'utf8_unicode_ci',
//     'prefix' => '',
// ]);


$capsule->setAsGlobal();
$capsule->bootEloquent();