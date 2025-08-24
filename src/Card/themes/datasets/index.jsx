import PropTypes from 'prop-types';
import { Badge, CardContent, Title } from '../../../common';
import { linkTargetValidator } from '../../../common/utils/prop-types.utils';
import Card from '../../../Card';
import { truncateText } from '../../../common/utils/text.utils';

import styles from './theme.module.css';

const DatasetsCard = ({ CustomLink, href, item, to }) => {
  const { title, custom_fields = {} } = item;
  const { dataset_type, short_desc } = custom_fields;
  return (
    <Card className={styles.themeRoot}>
      <CardContent align="right" position="top">
        <Badge>{dataset_type}</Badge>
      </CardContent>
      <CardContent position="middle">
        <div className={styles.imgWrapper}>
          {custom_fields.dataset_image ? (
            <img className={styles.img} src={custom_fields.dataset_image} />
          ) : null}
        </div>
        <Title
          {...{ CustomLink, href, to }}
          text={title}
          height="52px"
          className={styles.title}
        />
      </CardContent>
      <CardContent position="bottom">
        {short_desc ? (
          <p className={styles.shortDesc}>{truncateText(short_desc, 280)}</p>
        ) : null}
      </CardContent>
    </Card>
  );
};

DatasetsCard.propTypes = {
  CustomLink: PropTypes.elementType,
  href: linkTargetValidator,
  to: linkTargetValidator,
  item: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    author: PropTypes.arrayOf(PropTypes.string),
    custom_fields: PropTypes.shape({
      dataset_image: PropTypes.string,
      dataset_type: PropTypes.string,
      short_desc: PropTypes.string,
    }),
  }).isRequired,
};

export default DatasetsCard;
