import { DatasetsCard } from '../src';

import CardContainer from './_helpers/CardContainer';
import item from './_mocks/datasets-item.json';

export default {
  title: 'Cards/Datasets',
  component: DatasetsCard,
  decorators: [(Story) => <CardContainer>{Story()}</CardContainer>],
};

export const Default = () => <DatasetsCard item={item} />;
