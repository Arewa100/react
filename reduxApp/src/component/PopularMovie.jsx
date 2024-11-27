import React from "react";
import { useGetPopularMoviesQuery } from "../movieApi";
import Card from "../reuseables/card";


const PopularMovies = ()=> {

    const {data} = useGetPopularMoviesQuery();

    return(
        <>
        <Card data={data}/>
        </>
    )
}

export default PopularMovies;