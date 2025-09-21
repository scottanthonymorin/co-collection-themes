import PropTypes from 'prop-types';
import CardContent from '../../CardContent';
import IconLabel from '../../IconLabel';
import Title from '../../Title';
import ReadMore from '../../ReadMore';
import { linkTargetValidator } from '../../utils/prop-types.utils';
import BaseCard from '../../BaseCard';
import { truncateText } from '../../utils/text.utils';

import styles from './theme.module.css';

const Card = ({ CustomLink, href, item, to }) => {
  const { author, title, custom_fields = {} } = item;
  const { item_type, short_desc } = custom_fields;

  return (
    <BaseCard className={styles.themeRoot} data-theme="problems-solutions">
      <CardContent align="start" position="top" className={styles.cardContentTop}>
        {item_type ? <IconLabel label={item_type} /> : null}
      </CardContent>
      <CardContent position="middle">
        <Title text={title} className={styles.title} />
        <div className={styles.authorContainer}>
          {author.length > 0 ? (
            <p className={styles.author}>by {truncateText(author.join(', '), 100)}</p>
          ) : null}
        </div>
        {short_desc ? (
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{
              __html: truncateText(short_desc, 125),
            }}
          />
        ) : null}
      </CardContent>
      <CardContent align="end" position="bottom">
        <ReadMore {...{ CustomLink, href, to }} />
      </CardContent>
    </BaseCard>
  );
};

Card.propTypes = {
  CustomLink: PropTypes.elementType,
  href: linkTargetValidator,
  to: linkTargetValidator,
  item: PropTypes.shape({}).isRequired,
};

export default Card;
