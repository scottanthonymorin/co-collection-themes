import { DatamartsCard } from '../src';

import CardContainer from './_helpers/CardContainer';
import item from './_mocks/datamarts-item.json';

export default {
  title: 'Themes/Datamarts',
  component: DatamartsCard,
};

export const Card = () => (
  <CardContainer>
    <DatamartsCard item={item} />
    <DatamartsCard
      item={{ ...item, custom_fields: { ...item.custom_fields, recently_added: false } }}
    />
  </CardContainer>
);
