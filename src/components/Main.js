import styles from "../css/Main.module.css";

const Main = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.puzzle_rectangle} />
      <div className={styles.top_circle} />
      <div className={styles.right_circle} />
      <div className={styles.left_circle} />
      <div className={styles.logo}>project </div>
      <div className={styles.subtitle}>
        Realize your idea. <br />
        We make your imagination a reality.
      </div>
    </div>
  );
};

export default Main;