import styles from "./WlcomeMsg.module.css";
const WlcomeMsg =({todoItems})=>{
    console.log(todoItems);
    return todoItems.length === 0  && <p className={styles.welcome}>Enjoy your day</p>
}
export default WlcomeMsg;