import PropTypes from 'prop-types';
import { CardContent, IconLabel, LinkButton, Title, ReadMore } from '../../../common';
import Card from '../../../Card';
import { truncateText } from '../../../common/utils/text.utils';
import { linkTargetValidator } from '../../../common/utils/prop-types.utils';

import styles from './theme.module.css';

const GtdcCard = ({ CustomLink, href, item, to }) => {
  const { title } = item || {};
  const { short_description, report_url } = item?.custom_fields || {};

  return (
    <Card className={styles.themeRoot} data-theme="gtdc">
      <CardContent position="middle">
        <Title
          {...{ CustomLink, href, to }}
          text={truncateText(title, 40)}
          height="52px"
        />
        {short_description ? (
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{
              __html: truncateText(short_description, 250),
            }}
          />
        ) : null}
        <LinkButton small url={report_url}>
          <IconLabel as="span" icon="link" label="Read the latest report" />
        </LinkButton>
      </CardContent>
      <CardContent align="right" position="bottom">
        <ReadMore {...{ CustomLink, href, label: 'Learn More', to }} />
      </CardContent>
    </Card>
  );
};

GtdcCard.propTypes = {
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

export default GtdcCard;
