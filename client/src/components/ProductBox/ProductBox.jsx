// import styles from "./ProductBox.module.css"
// import { useState,useEffect } from "react";
// import axios from "axios";
// // import Card from "./Card";

// const ProductBox = ({searchTerm})=>{
//     const[books,setbook]= useState([]);
//     const BASE_URL = "http://localhost:5000"; // http://localhost:5000
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(()=>{
//         setIsLoading(true);
//         axios.get(`${BASE_URL}/allbooks`)
//         .then(res => setbook(res.data))
//         .catch(err => console.error(err))
//         .finally(() => setIsLoading(false));

//     },[]);
//     console.log(books);
//      console.log(searchTerm + " from books");

//     const filteredBooks = books.filter((book) =>
//         book.keywords.toUpperCase().includes(searchTerm.toUpperCase())
//     );

//     return(
//         <div className={styles.productbox}>
//             {   isLoading ? (
//                <div className={styles.loading}><div className="loader"></div></div>
//             ): filteredBooks.length > 0 ? (
//                 filteredBooks.map((book) => (
//                     <div key={book._id} className={styles.cards}>
//                         <div className={styles.imagebox}><img src={book.URL} alt="image" /></div>
//                         <div className={styles.details}>
//                             <ul>
//                                 <li>{book.name}</li>
//                                 <li>{book.author}</li>
//                                 <li>{book.status}</li>
//                                 <li>{book.price} tk</li>
//                             </ul>
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 // <div className={styles.loading}> <div className="loader"></div></div>
//                 <div className={styles.loading}> <div className="errorloader"></div><span className={styles.errormsg} >No books found</span></div>
//             )
                
//             }
           
//         </div>
//     )
// }

// export default ProductBox;



import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ProductBox.module.css";

const ProductBox = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [lastId, setLastId] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "http://localhost:5000";
  const LIMIT = 10;

  const loadBooks = async () => {
    if (loading) return;
    if (count && books.length >= count) return;

    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/allbooks`, {
        params: { limit: LIMIT, lastId },
      });

      if (res.data.books.length > 0) {
        setBooks(prev => [
          ...prev,
          ...res.data.books.filter(b => !prev.some(pb => pb._id === b._id))
        ]);
        setLastId(res.data.books[res.data.books.length - 1]._id);
      }

      setCount(res.data.count);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => { loadBooks(); }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadBooks();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [books, loading]);

  const filteredBooks = books.filter(book =>
    book.keywords.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <div className={styles.productbox}>
      {filteredBooks.length > 0 ? (
        filteredBooks.map(book => (
          <div key={book._id} className={styles.cards}>
            <div className={styles.imagebox}>
              <img src={book.URL} alt={book.name} />
            </div>
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
        <div className={styles.loading}>
          <span className={styles.errormsg}>No books found</span>
        </div>
      )}
      {loading && <div className={styles.loading}><div className="loader"></div></div>}
    </div>
  );
};

export default ProductBox;










