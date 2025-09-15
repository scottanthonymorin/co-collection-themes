import styles from './ItemPageContainer.module.css';

const ItemPageContainer = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ItemPageContainer;
