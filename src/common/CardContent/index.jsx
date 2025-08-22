import styles from './CardContent.module.css';

const CardContent = ({ align = 'between', position, children }) => {
  const alignKey = (align || '').toLowerCase();
  const positionKey = (position || '').toLowerCase();
  const variantAlign = styles[alignKey] || styles.left;
  const variantPosition = styles[positionKey] || '';
  return (
    <div
      className={`${styles.wrapper} ${variantAlign} ${variantPosition}`.trim()}
      data-align={alignKey}
      data-position={positionKey}
    >
      {children}
    </div>
  );
};

export default CardContent;
