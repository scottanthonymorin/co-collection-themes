import PropTypes from 'prop-types';
import CardContent from '../../CardContent';
import IconLabel from '../../IconLabel';
import Title from '../../Title';
import ReadMore from '../../ReadMore';
import { linkTargetValidator } from '../../utils/prop-types.utils';
import { truncateText } from '../../utils/text.utils';

import BaseCard from '../../BaseCard';

import styles from './theme.module.css';

const Card = ({ CustomLink, href, item, to }) => {
  const { author, title, custom_fields = {} } = item;
  const { resource_type } = custom_fields;

  return (
    <BaseCard className={styles.themeRoot} data-theme="problems-solutions">
      <CardContent align="left" position="top" className={styles.cardContentTop}>
        {resource_type ? <IconLabel label={resource_type} /> : null}
      </CardContent>
      <CardContent position="middle">
        <Title text={title} className={styles.title} />
        <div className={styles.authorContainer}>
          {author.length > 0 ? (
            <p className={styles.author}>by {truncateText(author.join(', '), 100)}</p>
          ) : null}
        </div>
      </CardContent>
      <CardContent align="between" position="bottom">
        <p className={styles.yearPublished}>{custom_fields.year_published}</p>
        <ReadMore {...{ CustomLink, href, to }} />
      </CardContent>
    </BaseCard>
  );
};

Card.propTypes = {
  CustomLink: PropTypes.elementType,
  href: linkTargetValidator,
  to: linkTargetValidator,
  item: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    author: PropTypes.arrayOf(PropTypes.string),
    custom_fields: PropTypes.shape({}),
  }).isRequired,
};

export default Card;
