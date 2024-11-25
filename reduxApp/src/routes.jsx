import { Children } from "react"
import Login from "./auth/login"
import Signup from "./auth/signup"
import Layout from "./layout/Layout"

const routes = [
    {
        path: '/',
        element: <Login/>

    },
    {
        path: '/signup',
        element: <Signup/>
    },

    {
        path:'/movie', 
        element: <Layout/>,
        children: [
            {

            }
        ]
    }
]

export default routes