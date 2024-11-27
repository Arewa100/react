import { MOVIE_IMAGE_URL } from "../movieApi"
import style from '../styles/card.module.css'


const Card = (props)=> {
    const{data} = props
    return(
        <div className={style.images}>
            {
                data?.results.map((movie)=> (
                    <div key={movie.id}>
                        <img src={`${MOVIE_IMAGE_URL}${movie.poster_path}`}
                         alt={`${movie.title}`} />


                        <div className={style.title}><p>{movie.title}</p></div>
                        {/* <div className={style.title}><p>{movie.overview}</p></div> */}
                    </div>
                    
                ))
            }
        </div>
    )
}

export default Card