import { findIconByLabel } from './ICON_LIST';

import styles from './IconLabel.module.css';

const IconLabel = ({ label, size = 'md' }) => {
  const Icon = findIconByLabel(label);

  return (
    <p className={styles.iconLabel}>
      <span className={styles.iconContainer}>
        {Icon && <Icon className={styles.icon} />}
      </span>
      <span>{label}</span>
    </p>
  );
};

export default IconLabel;
