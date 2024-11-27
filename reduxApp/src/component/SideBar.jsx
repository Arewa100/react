import style from '../styles/sidebar.module.css'
import {useNavigate } from 'react-router'

const SideBar = ()=> {

    const navigate = useNavigate(); 
    const page = ["upcoming", "popular", "toprated", "nowplaying"]

    const handleClick =(event)=> {
        page.filter((page)=>{
            if(page.includes(event.target.value)) {
                navigate(`./${page}`)
            }
        })
        console.log(event.target.value)
    }
    

    return(
        <>
        <div className={style.sidebar}>
           <div className={style.theButtonDiv}>
            <button onClick={handleClick} value="upcoming">Upcoming</button>
            <button onClick={handleClick} value="popular">Popular</button>
            <button onClick={handleClick} value="toprated">Toprated</button>
            <button onClick={handleClick} value="nowplaying">Nowplaying</button>
           </div>


           <div className={style.sideBarTransparentShape}>

           </div>
        </div>
        </>
    )
}

export default SideBar