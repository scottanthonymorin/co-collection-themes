import styles from './Badge.module.css';

const Badge = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Badge;
