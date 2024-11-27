import React from "react";
import { useGetTopRatedMoviesQuery } from "../movieApi"
import Card from "../reuseables/card";
const TopRated = ()=> {
    const {data} = useGetTopRatedMoviesQuery();

    return(
        <>
        <Card data={data}/>
        </>
    )
}

export default TopRated