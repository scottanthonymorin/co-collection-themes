import styles from './decorators.module.css';

const WidgetContainer = ({ children }) => {
  return <div className={styles.widgetWrapper}>{children}</div>;
};

export default WidgetContainer;
