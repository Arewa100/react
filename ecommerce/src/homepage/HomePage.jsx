import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../styles/homepage.module.css'
import { Outlet } from "react-router-dom";

const HomePage = ()=> {
    return(
        <>
        <div className={style.homepage}>
            <Header/>
        <div>
            <Outlet/>
        </div>
            <Footer/>
        </div>
        </>
    )
}

export default HomePage;