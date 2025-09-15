import { AfricanGivingTraditionsItemPage } from '../src';

import ItemPageContainer from './_helpers/ItemPageContainer';
import item from './_mocks/african-giving-traditions-item.json';

export default {
  title: 'Themes/African Giving Traditions',
  component: AfricanGivingTraditionsItemPage,
};

export const ItemPage = () => (
  <ItemPageContainer>
    <AfricanGivingTraditionsItemPage item={item} />
  </ItemPageContainer>
);
