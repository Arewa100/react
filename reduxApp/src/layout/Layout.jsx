import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SideBar from "../component/SideBar";
import style from '../styles/layout.module.css'


const Layout = ()=> {
    return(
        <>
        <div className={style.wrapper}>
        <Header/>
        <div className={style.outletContainer}>
            <SideBar/>
            <Outlet/>
        </div>
        <Footer/>
        </div>
        </>
    )
}

export default Layout