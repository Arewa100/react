import Login from "../auth/login"
import Signup from "../auth/signup"

const routes = [
    {
        path: '/login',
        element: <Login />
    }, 
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/',
        element: <Signup />
    }
]

export default routes;