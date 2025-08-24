import { FaLightbulb, FaTriangleExclamation } from 'react-icons/fa6';

const ICON_LIST = [
  { label: 'Problem', icon: FaTriangleExclamation },
  { label: 'Solution', icon: FaLightbulb },
];

export const findIconByLabel = (label) => {
  const iconObj = ICON_LIST.find((item) => item.label === label);
  return iconObj ? iconObj.icon : null;
};
