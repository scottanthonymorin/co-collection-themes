import PropTypes from 'prop-types';
import { Badge, CardContent, Title, ReadMore } from '../../../common';
import { linkTargetValidator } from '../../../common/utils/prop-types.utils';
import IconLabel from '../../../common/IconLabel';
import Card from '../../../Card';
import { truncateText } from '../../../common/utils/text.utils';

import styles from './theme.module.css';

const ProblemsSolutionsCard = ({ CustomLink, href, item, to }) => {
  const { author, title, custom_fields = {} } = item;
  const { item_type, short_desc } = custom_fields;

  return (
    <Card className={styles.themeRoot} data-theme="problems-solutions">
      <CardContent align="left" position="top" className={styles.cardContentTop}>
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
      <CardContent align="right" position="bottom">
        <ReadMore {...{ CustomLink, href, to }} />
      </CardContent>
    </Card>
  );
};

ProblemsSolutionsCard.propTypes = {
  CustomLink: PropTypes.elementType,
  href: linkTargetValidator,
  to: linkTargetValidator,
  item: PropTypes.shape({}).isRequired,
};

export default ProblemsSolutionsCard;
