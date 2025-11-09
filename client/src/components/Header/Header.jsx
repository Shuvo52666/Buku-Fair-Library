import styles from "./Header.module.css";


import { IoSearchOutline } from "react-icons/io5";
import { PiAlignLeftFill } from "react-icons/pi";
const Header = () => {

    return(
        <header className={styles.header}>
           <div className={`container ${styles.headerbox}`}>  
                <div className={styles.logobox}><img src="/photos/BUKUFAIRLOGO.png" alt=""/></div>
                <div className={styles.searchbox}>
                    <input id="searchinput" type="text" placeholder="Start typing to discover your next read"/>
                    <div className={styles.icon}>
                        <IoSearchOutline fontSize="28px"/>
                    </div>
                </div>
                <div className={styles.others}> <a href="/Admin" target="_blank" className={styles.admin}><PiAlignLeftFill fontSize="37px" cursor="pointer"/> </a></div>
            </div>
        </header>
    )
}

export default Header;