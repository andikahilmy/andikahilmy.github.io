import styles from './splash.module.css'

function Splash(props) {
  return (
    <div className={styles.splash} style={{backgroundImage: `url(/${props.bg})`}}>
      {props.children}
    </div>
  );
}
export default Splash;