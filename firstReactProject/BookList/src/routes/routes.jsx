import Login from "../auth/login"
import Signup from "../auth/signup"
import BookListPage from "../components/BookListPage";

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
        path: '/booklist',
        element: <BookListPage />
    }
]

export default routes;