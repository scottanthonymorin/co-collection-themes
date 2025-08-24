import AfricanGivingTraditionsCard from './african-giving-traditions';
import DatamartsCard from './datamarts';
import DatasetsCard from './datasets';
import VizDatabaseCard from './viz-database';
import ProblemsSolutionsCard from './problems-solutions';

export const cardThemeEntries = [
  { themeName: ['african-giving-traditions'], Component: AfricanGivingTraditionsCard },
  { themeName: ['datamarts'], Component: DatamartsCard },
  { themeName: ['datasets'], Component: DatasetsCard },
  { themeName: ['problems-solutions'], Component: ProblemsSolutionsCard },
  { themeName: ['viz-database', 'viz-database-beta'], Component: VizDatabaseCard },
];

export {
  AfricanGivingTraditionsCard,
  DatamartsCard,
  DatasetsCard,
  ProblemsSolutionsCard,
  VizDatabaseCard,
};
