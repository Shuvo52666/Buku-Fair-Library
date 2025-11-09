import styles from "./Header.module.css";


import { IoSearchOutline } from "react-icons/io5";
import { PiAlignLeftFill } from "react-icons/pi";
const Header = () => {
    const openAdmin = () => {
    window.open('', '_blank', 'noopener,noreferrer');
  };
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
                <div className={styles.others}> <div onClick={openAdmin} className={styles.admin}><PiAlignLeftFill fontSize="37px" cursor="pointer"/> </div></div>
            </div>
        </header>
    )
}

export default Header;