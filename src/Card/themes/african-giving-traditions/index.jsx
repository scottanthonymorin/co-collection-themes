import PropTypes from 'prop-types';
import { Badge, CardContent, Title, ReadMore } from '../../../common';
import Card from '../../../Card';
import { truncateText } from '../../../common/utils/text.utils';
import { linkTargetValidator } from '../../../common/utils/prop-types.utils';

import styles from './theme.module.css';

const AfricanGivingTraditionsCard = ({ CustomLink, href, item, to }) => {
  const { author, desc, title } = item || {};
  const { location } = item?.custom_fields || {};

  return (
    <Card className={styles.themeRoot} data-theme="african-giving-traditions">
      <CardContent align="right" position="top">
        {location && <Badge>{location}</Badge>}
      </CardContent>
      <CardContent position="middle">
        <Title
          {...{ CustomLink, href, to }}
          text={truncateText(title, 40)}
          height="52px"
        />
        <div className={styles.authorContainer}>
          {item.author ? (
            <p className={styles.author}>by {truncateText(author.join(', '), 100)}</p>
          ) : null}
        </div>
        {desc ? (
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{
              __html: truncateText(item.desc, 125),
            }}
          />
        ) : null}
      </CardContent>
      <CardContent align="left" position="bottom">
        <ReadMore {...{ CustomLink, href, to }} />
      </CardContent>
    </Card>
  );
};

AfricanGivingTraditionsCard.propTypes = {
  CustomLink: PropTypes.elementType,
  href: linkTargetValidator,
  to: linkTargetValidator,
  item: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    author: PropTypes.arrayOf(PropTypes.string),
    custom_fields: PropTypes.shape({
      location: PropTypes.string,
    }),
  }).isRequired,
};

export default AfricanGivingTraditionsCard;
