import React from 'react';
import styles from './readMore.module.css';

const ReadMore = ({ href, label = 'Read More', align = 'right' }) => {
  const justify = align === 'right' ? 'flex-end' : 'flex-start';
  return (
    <div className={styles.wrapper} style={{ justifyContent: justify }}>
      <a href={href} className={styles.link}>
        {label}
      </a>
    </div>
  );
};

export default ReadMore;
