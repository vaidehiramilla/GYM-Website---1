import styles from './Videos.module.css';

export function Videos(props) {
  
  return (
    <div>
      <iframe
        className={styles.video}
        src={props.video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
