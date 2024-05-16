import {Navigate, createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import PagNotFund from './pages/PagNotFund'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Recuperacao from './pages/Recuperacao'
import Projetos from './pages/projetos'
import { Projeto } from './pages/Projeto'


let user  = localStorage.getItem('userData') ? true : false;




export const Router = createBrowserRouter([
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/cadastro',
        element: <Cadastro/>
    },
    {
        path:'/recuperacao',
        element: <Recuperacao/>
    },
    {
        path: '/',
        element: <Layout/>,
        errorElement:<PagNotFund/>,
        children:[
            {
                path:'',
                element: user ?  <Projetos/> : <Navigate to="/login" replace />
            },
            {
                path:'/projeto/:id',
                element: user ?  <Projeto/> : <Navigate to="/login" replace />
            },
        ]
    },

    // {
    //     path:'/projeto/:idprojeto',
    //     element:<div>Projeto do id</div>,
    //     children:[
    //         {
    //             path:'',
    //             element:<div>Home da tela do projeto!</div>
    //         },
    //         {
    //             path:'equipe',
    //             element:<div>listagem de mebros da equipe</div>
    //         },
    //         {
    //             path:'calendario',
    //             element:<div>Listagem de tarefas pendente com data</div>
    //         },
    //     ]
    // }
])