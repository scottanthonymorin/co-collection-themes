import { GtdcCard } from '../src';

import item from './_mocks/gtdc-item.json';
import CardContainer from './_helpers/CardContainer';

export default {
  title: 'Themes/GTDC',
  component: GtdcCard,
};

export const Card = () => (
  <CardContainer>
    <GtdcCard item={item} />
  </CardContainer>
);
