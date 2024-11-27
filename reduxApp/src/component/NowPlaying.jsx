import { useGetNowPlayingMoviesQuery } from "../movieApi"
import Card from "../reuseables/card"

const NowPlaying = ()=> {
    const {data, isLoading, isError} = useGetNowPlayingMoviesQuery()
    // console.log(data.dates.maximum)
    // console.log(data.results.map((movie)=>(console.log(movie.poster_path))))

    return(
        <>
        <Card data={data}/>
        </>
    )
}

export default NowPlaying