import styles from './decorator.module.css';

const CardContainer = ({ children }) => {
  return <div className={styles.cardWrapper}>{children}</div>;
};

export default CardContainer;
