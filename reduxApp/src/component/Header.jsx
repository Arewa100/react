import style from '../styles/header.module.css'

const Header = ()=> {
    return(
        <>
        <div>
            <nav className={style.navBar}>
                <div className={style.logo}>
                    <p>BLUE<span>m</span>OVES.</p>
                </div>
                <div className={style.searchBar}>
                    <input type="text" placeholder='search for Movies'/>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Header