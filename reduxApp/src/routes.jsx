import { Children } from "react"
import Login from "./auth/login"
import Signup from "./auth/signup"
import Layout from "./layout/Layout"
import PopularMovies from "./component/PopularMovie"
import UpcomingMovies from "./component/UpcomingMovies"
import NowPlaying from "./component/NowPlaying"
import TopRated from "./component/TopRated"

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
                path: "/movie/popular",
                element: <PopularMovies/>
            },
            {
                path: "/movie/upcoming",
                element: <UpcomingMovies/>
            },
            {
                path: "/movie/nowplaying",
                element: <NowPlaying/>
            }, 
            {
                path: "/movie/toprated",
                element: <TopRated/>
            }
        ]
    }
]

export default routes