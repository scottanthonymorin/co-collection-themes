import styles from './title.module.css';

const Title = ({ height, href, CustomLink, text }) => {
  return (
    <p className={styles.title} style={{ height }}>
      {CustomLink ? (
        CustomLink
      ) : (
        <a href={href} className={styles.link}>
          {text}
        </a>
      )}
    </p>
  );
};

export default Title;
