import { useGetUpcomingMoviesQuery } from "../movieApi"
import Card from "../reuseables/card";
const UpcomingMovies = ()=> {
    const {data} = useGetUpcomingMoviesQuery();
    // console.log(data)
    return(
        <>
        <Card data={data}/>
        </>
    )
}

export default UpcomingMovies