<?php

namespace App\Core;

use App\Router\ModelRouter;

class Core {
    public static function dispatch(array $routes){
        // Obtém o método da requisição atual
        $method = $_SERVER['REQUEST_METHOD'];

        // Obtém o caminho da requisição atual
        $uri = $_SERVER['REQUEST_URI'];

        // Itera sobre as rotas registradas
        foreach ($routes as $route) {
            // Verifica se é post, get, put ou delete
           
            if ($route['method'] === $method) {
                // aqui ele vai pega o {id} e substituir por string ou number
                $pattern = '#^' . preg_replace('/{id}/', '([\w-]+)', $route['path']) . '$#';

                // verficando se da o matche
                if (preg_match($pattern, $uri, $matches)) {
                    // Remove o primeiro item de $matches, pois é o caminho completo
                    array_shift($matches);

                    // separa o controller do funcao
                    [$controllerName, $methodName] = explode('@', $route['action']);

                    // montando o controller para o instanciar
                    $controllerClass = 'App\\Controllers\\' . $controllerName;
                    $controller = new $controllerClass();
                    $param = $matches;

                    // chamando o metodo do controller
                    $controller->$methodName($param);

                    // Encerra o loop após encontrar a rota
                    return;

                }
                
            }
        }

        // se não achar nenhuma rota, retorna um erro 404
        http_response_code(404);
        echo "Página não encontrada";
    }
}
