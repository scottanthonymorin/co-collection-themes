import PropTypes from 'prop-types';
import { CardContent, IconLabel, Title, ReadMore } from '../../../common';

import { linkTargetValidator } from '../../../common/utils/prop-types.utils';
import { truncateText } from '../../../common/utils/text.utils';

import Card from '../../../Card';

import styles from './theme.module.css';

const GtrexCard = ({ CustomLink, href, item, to }) => {
  const { author, title, custom_fields = {} } = item;
  const { resource_type } = custom_fields;

  return (
    <Card className={styles.themeRoot} data-theme="problems-solutions">
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
    </Card>
  );
};

GtrexCard.propTypes = {
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

export default GtrexCard;
