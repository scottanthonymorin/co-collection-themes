import React from 'react';

import styles from './badge.module.css';

const Badge = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Badge;
