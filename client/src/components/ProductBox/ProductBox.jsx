import styles from "./ProductBox.module.css"
import { useState,useEffect } from "react";
import axios from "axios";
// import Card from "./Card";

const ProductBox = ()=>{
    const[books,setbook]= useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/allbooks`)
        .then(res => setbook(res.data))
        .catch(err => console.error(err));

    },[]);
    console.log(books);

    return(
        <div className={styles.productbox}>
            {
                books.map((book) => (
                    <div key={book._id} className={styles.cards}>
                        <div className={styles.imagebox}><img src={book.URL} alt="image" /></div>
                        <div className={styles.details}>
                            <ul>
                                <li>{book.name}</li>
                                <li>{book.author}</li>
                                <li>{book.status}</li>
                                <li>{book.price} tk</li>
                            </ul>
                        </div>
                    </div>
                ))
            }
           
        </div>
    )
}

export default ProductBox;