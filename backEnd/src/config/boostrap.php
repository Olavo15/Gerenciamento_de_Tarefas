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
//     'database' => 'Nome do banco de dados, acho que tu colocou sea',
//     'username' => 'Teu nome de usuario, se eu não me engano o teu é root',
//     'password' => 'pode deixar so '' como não tem senha....',
//     'charset' => 'utf8',
//     'collation' => 'utf8_unicode_ci',
//     'prefix' => '',
// ]);

// depois de configurar procura um arquivo chamado UpMigration.php ele vai ta na raiz fora do src!!

$capsule->addConnection([
    'driver' => 'mysql',
    'host' => 'localhost',
    'database' => 'GERENCIADOR_TAREFA',
    'username' => 'sea',
    'password' => 'S!@sytem2024',
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => '',
]);


$capsule->setAsGlobal();
$capsule->bootEloquent();