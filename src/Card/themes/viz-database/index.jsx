import PropTypes from 'prop-types';
import { CardContent, Title } from '../../../common';
import { linkTargetValidator } from '../../../common/utils/prop-types.utils';
import Card from '../../../Card';
import { getDataYearsLabels, truncateText } from '../../../common/utils/text.utils';

import styles from './theme.module.css';

const VizDatabaseCard = ({ CustomLink, href, item, to }) => {
  const { title, desc, custom_fields = {} } = item;
  const { data_years, image_url } = custom_fields;

  const yearsLabel = getDataYearsLabels(data_years);

  return (
    <Card className={`${styles.themeRoot} `} data-theme="viz-database">
      <CardContent position="top">
        {yearsLabel ? <p className={styles.years}>{yearsLabel}</p> : null}
      </CardContent>
      <CardContent fill position="middle">
        <Title
          {...{ CustomLink, href, to }}
          text={item.title}
          height="100px"
          className={styles.title}
        />
        {image_url ? (
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={image_url} alt={title} />
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

VizDatabaseCard.propTypes = {
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

export default VizDatabaseCard;
