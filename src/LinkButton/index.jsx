import * as React from 'react';
import styles from './LinkButton.module.css';

// TODO: Move this to global CSS variables or a theme context
const typeVars = {
  primary: {
    '--btn-bg': '#0fb5c3',
    '--btn-text': '#fff',
  },
  secondary: {
    '--btn-bg': '#f0f0f0',
    '--btn-text': '#333',
  },
};

const LinkButton = ({
  url,
  children,
  type = 'primary',
  newWindow = false,
  xsmall,
  small,
  isCentered,
  ...props
}) => {
  if (!url || url.length === 0) return null;

  const classNames = [
    styles.linkButton,
    styles[type],
    xsmall && styles.xsmall,
    small && styles.small,
    isCentered && styles.isCentered,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      href={url}
      className={classNames}
      style={typeVars[type]}
      {...(newWindow ? { target: '_blank' } : {})}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
