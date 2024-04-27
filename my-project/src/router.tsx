import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout/Layout'
import PagNotFund from './pages/PagNotFund'
import Equipes from './pages/Equipes'


export const Router = createBrowserRouter([
    {
        path:'/login',
        element: <div>login</div>
    },
    {
        path:'/cadastro',
        element: <div>Cadastro</div>
    },
    {
        path: '/',
        element: <Layout/>,
        errorElement:<PagNotFund/>,
        children:[
            {
                path:'',
                element: <Home/>
            },
            {
                path:'equipes',
                element: <Equipes/>,
                children:[
                    {
                        path: ':id',
                        element: <div>projeto</div>
                    }
                ]
            },
            {
                path:'projetos',
                element: <div>projetos</div>
            },
        ]
    },

    {
        path:'/projeto/:idprojeto',
        element:<div>Projeto do id</div>,
        children:[
            {
                path:'',
                element:<div>Home da tela do projeto!</div>
            },
            {
                path:'equipe',
                element:<div>listagem de mebros da equipe</div>
            },
            {
                path:'calendario',
                element:<div>Listagem de tarefas pendente com data</div>
            },
        ]
    }
])