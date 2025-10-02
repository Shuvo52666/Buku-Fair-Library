import styles from './SignIn.module.css'
import { useState } from 'react';

const SignIn = () =>{

    const[status,set] = useState("");
   
    const enter = () =>{
        const user =document.getElementById("user").value;
        const pass =document.getElementById("pass").value;

       

        if(user == "admin" && pass == "1234"){
            set("hide");
            console.log("hello admin");
        }else{
            set("alert");
                 console.log("mile nai");
        }
   
    }

    return(
        <div id='signbox' className={`${styles.Signbox} ${styles[status]}`}>
            <ul className='container'>
                <li><label htmlFor="user">User Name</label></li>
                <li><input id="user" type="text" placeholder="Enter User Name.." /></li>
                <li><label htmlFor="pass">Password</label></li>
                <li><input id="pass" type="password" placeholder='Enter Password..'/></li>
                <li><button onClick={enter}>Enter</button></li>
            </ul>
        </div>
    )
}

export default SignIn;
