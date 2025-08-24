import PropTypes from 'prop-types';
import { Badge, CardContent, Title, ReadMore } from '../../../common';
import { linkTargetValidator } from '../../../common/utils/prop-types.utils';
import IconLabel from '../../../common/IconLabel';
import Card from '../../../Card';
import {
  arrayToString,
  convertFileSize,
  truncateText,
} from '../../../common/utils/text.utils';

import styles from './theme.module.css';

const ProblemsSolutionsCard = ({ CustomLink, href, item, to }) => {
  const { title, desc, custom_fields = {} } = item;
  const { item_type } = custom_fields;

  return (
    <Card className={styles.themeRoot} data-theme="problems-solutions">
      <CardContent align="left" position="top" className={styles.cardContent}>
        {item_type ? <IconLabel label={item_type} /> : null}
      </CardContent>
      <CardContent position="middle"></CardContent>
      <CardContent align="right" position="bottom"></CardContent>
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
