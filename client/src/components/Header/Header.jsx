import styles from "./Header.module.css";

// import { useState } from "react";


import { IoSearchOutline } from "react-icons/io5";
import { PiAlignLeftFill } from "react-icons/pi";
const Header = ({setSearchTerm , searchTerm}) => {

    console.log(searchTerm + " from header");

    return(
        <header className={styles.header}>
           <div className={`container ${styles.headerbox}`}>  
                <div className={styles.logobox}><img src="/photos/BUKUFAIRLOGO.png" alt=""/></div>
                <div className={styles.searchbox}>
                    <input id="searchinput" type="text" placeholder="Start typing to discover your next read" onChange={(e) => setSearchTerm(e.target.value)}/>
                     
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