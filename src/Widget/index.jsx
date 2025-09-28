import React from 'react';
import { getThemeCard } from '../utils/card-themes.utils';
import { getThemeStyles } from '../utils/widget-themes.utils';
import useGetItems from './use-get-items';

import styles from './Widget.module.css';

const Widget = ({ widgetTheme, maxCardsPerRow = 5, ...props }) => {
  const { items, loading } = useGetItems(props);
  const CardComponent = getThemeCard(widgetTheme);
  const themeStyles = getThemeStyles(widgetTheme);
  const itemCount = items?.length || 0;

  if (loading || itemCount === 0) return null;

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
