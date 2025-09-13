import { GtdcCard } from '../src';

import item from './_mocks/gtdc-item.json';
import CardContainer from './_helpers/CardContainer';

export default {
  title: 'Cards/GTDC Card',
  component: GtdcCard,
};

export const Default = () => (
  <CardContainer>
    <GtdcCard item={item} />
  </CardContainer>
);
