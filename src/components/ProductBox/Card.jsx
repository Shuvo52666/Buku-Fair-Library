import styles from "./ProductBox.module.css"

const Card = ()=>{
    return(
        <div className={styles.cards}>
            <div className={styles.imagebox}><img src="https://i.ibb.co.com/C3tXyqxS/dracula.jpg" alt="image" /></div>
            <div className={styles.details}>
                <ul>
                    <li>Chol</li>
                    <li>Antik mahmud</li>
                    <li>new</li>
                    <li>150 tk</li>
                </ul>
            </div>
        </div>
    )
}

export default Card;