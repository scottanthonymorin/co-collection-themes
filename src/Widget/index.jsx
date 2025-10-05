import React from 'react';
import { getThemeCard } from '../utils/card-themes.utils';
import { getThemeStyles } from '../utils/widget-themes.utils';

import styles from './Widget.module.css';

const Widget = ({ items, widgetTheme, maxCardsPerRow = 5 }) => {
  const CardComponent = getThemeCard(widgetTheme);
  const themeStyles = getThemeStyles(widgetTheme);
  const itemCount = items?.length || 0;

  return (
    <div
      className={`daro-widget ${styles.base} ${
        styles[`count${Math.min(itemCount, maxCardsPerRow)}`]
      } ${styles.widgetWrapper} ${themeStyles.themeRoot || ''}`}
    >
      {items?.map((item) => (
        <CardComponent key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Widget;
