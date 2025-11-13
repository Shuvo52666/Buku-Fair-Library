import styles from "./footer.module.css";

import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer= () =>{
    return(
        <footer>
            <div className={`container ${styles.foot}`}>
                <div className={styles.box1}>
                <div className={styles.footerimgbox}>
                    <img src="/photos/bukufooterwhitelogo.png" alt="bukufair logo"/>
                </div>
                    <span>We are selling mirrors in a land of the blind</span>
                </div>
                <div className={styles.box2}>
                <span>Contact Us</span>
                <ul>
                    <li><a href="https://www.facebook.com/share/1P7ipxsy13/" target="blank"><FaFacebook /></a></li>
                    <li><a href="#"><FaWhatsapp /></a></li>
                    <li><a href="#"><FaYoutube /></a></li>
                    <li><a href="#"><FaGoogle  /></a></li>
                </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;