import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASEURL = import.meta.env.VITE_APP_MOVIE_IMAGES_URL
const APIKEY = import.meta.env.VITE_APP_APIKEY

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl:`${BASEURL}`}),
    endpoints:(builder)=> ({
        getPopularMovies: builder.query({
            query:()=>(`${BASEURL}/movie/popular?api_key=${APIKEY}`)
        })
    })
})
//behind the scene
// `use${GetPopularMovies}Query`
export const {useGetPopularMovieQuesry} = movieApi;


//THIS IS WHERE WE ARE // WE WILL CONTINUE FROM HERE