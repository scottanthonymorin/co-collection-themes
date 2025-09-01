import {
  FaBloggerB,
  FaBook,
  FaDatabase,
  FaLightbulb,
  FaPodcast,
  FaRegChartBar,
  FaRegFileLines,
  FaRegNewspaper,
  FaTriangleExclamation,
} from 'react-icons/fa6';

const ICON_LIST = [
  // gtrex
  { label: 'Blog', icon: FaBloggerB },
  { label: 'Book or Chapter', icon: FaBook },
  { label: 'Dashboard or Infographic', icon: FaRegChartBar },
  { label: 'Dataset', icon: FaDatabase },
  { label: 'Magazine or Newspaper Article', icon: FaRegNewspaper },
  { label: 'Podcast', icon: FaPodcast },
  { label: 'Report', icon: FaRegFileLines },
  // to be completed...

  // problems-solutions
  { label: 'Problem', icon: FaTriangleExclamation },
  { label: 'Solution', icon: FaLightbulb },
];

export const findIconByLabel = (label) => {
  const iconObj = ICON_LIST.find((item) => item.label === label);
  return iconObj ? iconObj.icon : null;
};
