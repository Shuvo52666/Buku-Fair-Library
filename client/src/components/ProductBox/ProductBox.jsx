import styles from "./ProductBox.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductBox = () => {
  const [books, setbook] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allbooks`)
      .then(res => {
        const data = res.data;
        setbook(Array.isArray(data) ? data : data.books || []);
      })
      .catch(err => console.error(err));
  }, []);

  console.log(books);

  return (
    <div className={styles.productbox}>
      {books?.map((book) => (
        <div key={book._id} className={styles.cards}>
          <div className={styles.imagebox}>
            <img src={book.URL} alt="image" />
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
      ))}
    </div>
  );
};

export default ProductBox;
