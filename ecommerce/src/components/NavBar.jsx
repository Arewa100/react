import Arrow from '../assets/images/Arrow';
import style from '../styles/navbar.module.css'
import SearchImage from '../assets/images/searchImage';
import CartImageOne from '../assets/images/CartImageOne';
import CartImageTwo from '../assets/CartImageTwo';
const NavBar = ()=> {
    return(
        <>
        <div>
            <div className={style.navBar}>
                <div className={style.shopName}>
                    <p>SHOP.CO</p>
                </div>

                <div className={style.selectbuttons}>
                    <ul>
                        <li className={style.Shop}><p>Shop</p>
                        <Arrow/></li>
                        <li><p>On Sale</p></li>
                        <li><p>New Arrivals</p></li>
                        <li><p>Brands</p></li>
                    </ul>
                </div>

                <div className={style.searchContainer}>
                    <div className={style.search}>
                        <i><SearchImage/></i>
                        <input type="text" className="text" placeholder='Search for products...'/>
                    </div>
                </div>

                <div className={style.cartsymbolsOne}>
                    <div>
                        <CartImageOne/>
                    </div>

                    <div>
                        <CartImageTwo/>
                    </div>
                </div>

                <div className={style.cartsymbolTwo}>
                <div>
                        <CartImageOne/>
                    </div>

                    <div>
                        <CartImageTwo/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;