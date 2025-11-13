import styles from "./ProductBox.module.css"
import { useState,useEffect } from "react";
import axios from "axios";
// import Card from "./Card";

const ProductBox = ({searchTerm})=>{
    const[books,setbook]= useState([]);
    const BASE_URL = "https://buku-fair-library-backend.onrender.com"; // http://localhost:5000
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setIsLoading(true);
        axios.get(`${BASE_URL}/allbooks`)
        .then(res => setbook(res.data))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false));

    },[]);
    console.log(books);
     console.log(searchTerm + " from books");

    const filteredBooks = books.filter((book) =>
        book.keywords.toUpperCase().includes(searchTerm.toUpperCase())
    );

    return(
        <div className={styles.productbox}>
            {   isLoading ? (
               <div className={styles.loading}><div className="loader"></div></div>
            ): filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
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
            ) : (
                // <div className={styles.loading}> <div className="loader"></div></div>
                <div className={styles.loading}> <div className="errorloader"></div><span className={styles.errormsg} >No books found</span></div>
            )
                
            }
           
        </div>
    )
}

export default ProductBox;