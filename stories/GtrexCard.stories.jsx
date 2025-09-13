import { GtrexCard } from '../src';

import CardContainer from './_helpers/CardContainer';
import item from './_mocks/gtrex-item.json';

export default {
  title: 'Cards/GtrexCard',
  component: GtrexCard,
  decorators: [(Story) => <CardContainer>{Story()}</CardContainer>],
};

export const Default = () => <GtrexCard item={item} />;
