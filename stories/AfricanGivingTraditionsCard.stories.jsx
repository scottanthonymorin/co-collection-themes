import { AfricanGivingTraditionsCard } from '../src';

import item from './_mocks/african-giving-traditions-item.json';
import CardContainer from './_helpers/CardContainer';

export default {
  title: 'Themes/African Giving Traditions',
  component: AfricanGivingTraditionsCard,
};

export const Card = () => (
  <CardContainer>
    <AfricanGivingTraditionsCard item={item} />
  </CardContainer>
);
