import { Badge, CardContent, Title, ReadMore } from '../../../common';
import Card from '../../../Card';

import { truncateText } from '../../../common/utils/text.utils';
import styles from './theme.module.css';

const AfricanGivingTraditionsCard = ({ item, href, CustomLink }) => {
  const { author, desc, title } = item || {};
  const { location } = item?.custom_fields || {};

  return (
    <Card className={styles.themeRoot} data-theme="african-giving-traditions">
      <CardContent align="right" position="top">
        {location && <Badge>{location}</Badge>}
      </CardContent>
      <CardContent position="middle">
        <Title
          href={href}
          CustomLink={CustomLink}
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
        <ReadMore href={href} CustomLink={CustomLink} />
      </CardContent>
    </Card>
  );
};

export default AfricanGivingTraditionsCard;
