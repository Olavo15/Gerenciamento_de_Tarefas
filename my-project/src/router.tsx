import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout/Layout'
import PagNotFund from './pages/PagNotFund'

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
                element: <div>projetos</div>
            },
        ]
    },

])