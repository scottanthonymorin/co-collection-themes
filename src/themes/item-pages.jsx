import { ItemPage as AfricanGivingTraditionsItemPage } from './african-giving-traditions';
import { ItemPage as GtrexItemPage } from './gtrex';

export const itemPageThemeEntries = [
  {
    themeName: ['african-giving-traditions'],
    ItemPageComponent: AfricanGivingTraditionsItemPage,
  },
  {
    themeName: ['giving-lab', 'givinglab', 'gtrex'],
    ItemPageComponent: GtrexItemPage,
  },
];

export { AfricanGivingTraditionsItemPage, GtrexItemPage };
