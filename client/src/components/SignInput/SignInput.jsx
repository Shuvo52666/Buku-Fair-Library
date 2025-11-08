import styles from './SignInput.module.css'
import { useState } from 'react';
import axios from "axios";

const SignInput = () =>{
    // console.log(REACT_APP_BACKEND_URL);

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


    const[formData,setformData] = useState({
        URL:"",
        name: "",
        author: "",
        status: "",
        price:"",
        keywords:"",
    });

    const handleChange = (e)=>{
        setformData({...formData ,[e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
            // const bookimg =document.getElementById("BookImage").value;
            // const bookname =document.getElementById("BookName").value;
            // const author =document.getElementById("AuthorName").value;
            // const stats =document.getElementById("Status").value;
            // const price =document.getElementById("Price").value;
            // const keywords =document.getElementById("Keywords").value;
            
            // console.log(bookimg+bookname+author+stats+price+keywords);


            try {
                await axios.post("http://localhost:5000/allbooks",formData);
                alert("book added successfuly");
                setformData({
                    URL:"",
                    name: "",
                    author: "",
                    status: "",
                    price:"",
                    keywords:"",
                })
            } catch (error) {
                console.error(error);
                alert("Failed to add book!");
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
                   <form className={styles.box1}>
                    <ul>
                        <li><label htmlFor="BookImage">Book Image URL</label></li>
                        <li><input name='URL' id='BookImage' type="text" value={formData.URL} onChange={handleChange} /></li>
                        <li><label htmlFor="BookName">Book Name</label></li>
                        <li><input name='name' id='BookName' type="text" value={formData.name} onChange={handleChange} /></li>
                        <li><label htmlFor="AuthorName">Author Name</label></li>
                        <li><input name='author' id='AuthorName' type="text" value={formData.author} onChange={handleChange}/></li>
                        <li><label htmlFor="Status">Book Status</label></li>
                        <li><input name='status' id='Status' type="text" value={formData.status} onChange={handleChange} /></li>
                        <li><label htmlFor="Price">Book Price</label></li>
                        <li><input name='price' id='Price' type="text" value={formData.price} onChange={handleChange} /></li>
                        <li><label htmlFor="Keywords">Fuzzy Keywods</label></li>
                        <li><input name='keywords' id='Keywords' type="text" value={formData.keywords} onChange={handleChange}/></li>
                    </ul>
                   </form>
                   <div className={styles.box2}>
                        <div class={styles.cards}>
                            <div class={styles.imagebox}><img src={formData.URL} alt="Book Image"/></div>
                            <div class={styles.details}>
                                <ul>
                                    <li>{formData.name}</li>
                                    <li>{formData.author}</li>
                                    <li>{formData.status}</li>
                                    <li>{formData.price} BDT</li>
                                </ul>
                            </div>
                        </div>
                        <button className={styles.buton} onClick={handleSubmit} >Submit</button>
                   </div>
                </div>
        </>

        
    )
}

export default SignInput;
