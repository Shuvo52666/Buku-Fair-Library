import styles from './InputBox.module.css';

const InputBox=()=>{
    return(
        <div className={styles.InputBox}>
           <div className={styles.box1}>
            <ul>
                <li><label htmlFor="">Book Image</label></li>
                <li><input type="file" /></li>
                <li><label htmlFor="">Book Name</label></li>
                <li><input type="text" /></li>
                <li><label htmlFor="">Author Name</label></li>
                <li><input type="text"/></li>
                <li><label htmlFor="">Status</label></li>
                <li><input type="text" /></li>
                <li><label htmlFor="">Price</label></li>
                <li><input type="text" /></li>
                <li><label htmlFor="">Keywords</label></li>
                <li><input type="text"/></li>
            </ul>
           </div>
           <div className={styles.box2}></div>
        </div>
    );
}

export default InputBox;