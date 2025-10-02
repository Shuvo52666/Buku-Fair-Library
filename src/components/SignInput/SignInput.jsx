import styles from './SignInput.module.css'
import { useState } from 'react';

const SignInput = () =>{

    const[status,set] = useState("");
    const[instat,setin] = useState("");
   
    const enter = () =>{
        const user =document.getElementById("user").value;
        const pass =document.getElementById("pass").value;

       

        if(user == "admin" && pass == "1234"){
            set("hide");
            setin("show");
            console.log("hello admin");
        }else{
            set("alert");
                 console.log("mile nai");
        }
   
    }

    return(
        <>
        <div id='signbox' className={`${styles.Signbox} ${styles[status]}`}>
            <ul className='container'>
                <li><label htmlFor="user">User Name</label></li>
                <li><input id="user" type="text" placeholder="Enter User Name.." /></li>
                <li><label htmlFor="pass">Password</label></li>
                <li><input id="pass" type="password" placeholder='Enter Password..'/></li>
                <li><button className={styles.buton}  onClick={() => { enter(); infunc(); }}>Enter</button></li>
            </ul>
        </div>

        <div className={`${styles[instat]} ${styles.InputBox}`}>
                   <div className={styles.box1}>
                    <ul>
                        <li><label htmlFor="BookImage">Book Image</label></li>
                        <li><input id='BookImage' type="file" /></li>
                        <li><label htmlFor="BookName">Book Name</label></li>
                        <li><input id='BookName' type="text" /></li>
                        <li><label htmlFor="AuthorName">Author Name</label></li>
                        <li><input id='AuthorName' type="text"/></li>
                        <li><label htmlFor="Status">Book Status</label></li>
                        <li><input id='Status' type="text" /></li>
                        <li><label htmlFor="Price">Book Price</label></li>
                        <li><input id='Price' type="text" /></li>
                        <li><label htmlFor="Keywords">Fuzzy Keywods</label></li>
                        <li><input id='Keywords' type="text"/></li>
                        <li>
                            <button className={styles.buton}>Clear</button>
                            <button className={styles.buton}>Preview</button>
                        </li>
                    </ul>
                   </div>
                   <div className={styles.box2}>
                        <div class={styles.cards}>
                            <div class={styles.imagebox}><img src="" alt="Book Image"/></div>
                            <div class={styles.details}>
                                <ul>
                                    <li>Book Name</li>
                                    <li>Author Name</li>
                                    <li>Status</li>
                                    <li>Price</li>
                                </ul>
                            </div>
                        </div>
                        <button className={styles.buton}>Submit</button>
                   </div>
                </div>
        </>

        
    )
}

export default SignInput;
