import styles from './Card.module.css';

const Card = ({ children, style, className = '', ...rest }) => {
  return (
    <div
      className={`daro-card ${styles.base} ${styles.wrapper} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export const CardWrapper = Card;
export default Card;
