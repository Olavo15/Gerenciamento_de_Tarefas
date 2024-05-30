import {Navigate, createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import PagNotFund from './pages/PagNotFund'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Projetos from './pages/projetos'
import { Projeto } from './pages/Projeto'


let user  = localStorage.getItem('userData') ? true : false;

console.log(user)




export const Router = createBrowserRouter([
    {
        path:'/login',
        element: user ?  <Navigate to="/" replace /> : <Login/> 
    },
    {
        path:'/cadastro',
        element: user ?  <Navigate to="/" replace /> : <Cadastro/> 
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
])