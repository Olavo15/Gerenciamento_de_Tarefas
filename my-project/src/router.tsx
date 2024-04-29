import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout/Layout'
import PagNotFund from './pages/PagNotFund'
import Projetos from './pages/Projetos'
import Projeto from './pages/Projeto'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement:<PagNotFund/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/equipes',
                element: <div>equipes</div>
            },
            {
                path:'/projetos',
                element: <Projetos/>
            },
            {
                path:'/projeto',
                element: <div>Projeto</div>
            }
            
        ]
    },

])