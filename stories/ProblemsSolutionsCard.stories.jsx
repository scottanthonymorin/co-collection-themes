import { ProblemsSolutionsCard } from '../src';

import CardContainer from './_helpers/CardContainer';
import item from './_mocks/problems-solutions-item.json';

export default {
  title: 'Cards/Problems and Solutions',
  component: ProblemsSolutionsCard,
  decorators: [(Story) => <CardContainer>{Story()}</CardContainer>],
};

export const Default = () => <ProblemsSolutionsCard item={item} />;
