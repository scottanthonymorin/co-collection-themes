import {
  Card as AfricanGivingTraditionsCard,
  ItemPage as AfricanGivingTraditionsItemPage,
} from './african-giving-traditions';
import { Card as DatamartsCard } from './datamarts';
import { Card as DatasetsCard } from './datasets';
import { Card as GtrexCard, ItemPage as GtrexItemPage } from './gtrex';
import { Card as GtdcCard } from './gtdc';
import { Card as ProblemsSolutionsCard } from './problems-solutions';
import { Card as VizDatabaseCard } from './viz-database';

export const themeEntries = [
  {
    themeName: ['african-giving-traditions'],
    CardComponent: AfricanGivingTraditionsCard,
    ItemPageComponent: AfricanGivingTraditionsItemPage,
  },
  { themeName: ['datamarts'], CardComponent: DatamartsCard },
  { themeName: ['datasets'], CardComponent: DatasetsCard },
  {
    themeName: ['giving-lab', 'givinglab', 'gtrex'],
    CardComponent: GtrexCard,
    ItemPageComponent: GtrexItemPage,
  },
  { themeName: ['gtdc', 'gtdc-projects'], CardComponent: GtdcCard },
  { themeName: ['problems-solutions'], CardComponent: ProblemsSolutionsCard },
  { themeName: ['viz-database', 'viz-database-beta'], CardComponent: VizDatabaseCard },
];

export {
  AfricanGivingTraditionsCard,
  AfricanGivingTraditionsItemPage,
  DatamartsCard,
  DatasetsCard,
  GtrexCard,
  GtrexItemPage,
  GtdcCard,
  ProblemsSolutionsCard,
  VizDatabaseCard,
};
