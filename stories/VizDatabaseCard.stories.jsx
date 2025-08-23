import { VizDatabaseCard } from '../src';

import CardContainer from './_helpers/CardContainer';
import item from './_mocks/viz-database-item.json';

export default {
  title: 'Cards/VizDatabase',
  component: VizDatabaseCard,
  decorators: [(Story) => <CardContainer>{Story()}</CardContainer>],
};

export const Default = () => <VizDatabaseCard item={item} />;
