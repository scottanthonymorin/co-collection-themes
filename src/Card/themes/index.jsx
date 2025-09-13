import AfricanGivingTraditionsCard from './african-giving-traditions';
import DatamartsCard from './datamarts';
import DatasetsCard from './datasets';
import GtrexCard from './gtrex';
import GtdcCard from './gtdc';
import ProblemsSolutionsCard from './problems-solutions';
import VizDatabaseCard from './viz-database';

export const cardThemeEntries = [
  { themeName: ['african-giving-traditions'], Component: AfricanGivingTraditionsCard },
  { themeName: ['datamarts'], Component: DatamartsCard },
  { themeName: ['datasets'], Component: DatasetsCard },
  { themeName: ['giving-lab', 'givinglab', 'gtrex'], Component: GtrexCard },
  { themeName: ['gtdc', 'gtdc-projects'], Component: GtdcCard },
  { themeName: ['problems-solutions'], Component: ProblemsSolutionsCard },
  { themeName: ['viz-database', 'viz-database-beta'], Component: VizDatabaseCard },
];

export {
  AfricanGivingTraditionsCard,
  DatamartsCard,
  DatasetsCard,
  GtrexCard,
  GtdcCard,
  ProblemsSolutionsCard,
  VizDatabaseCard,
};
