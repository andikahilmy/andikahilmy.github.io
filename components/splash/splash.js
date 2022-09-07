import styles from './splash.module.css'

function Splash(props) {
  return (
    <div className={styles.splash}>
      {props.children}
    </div>
  );
}
export default Splash;