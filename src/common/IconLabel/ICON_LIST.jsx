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
import { FaExternalLinkAlt } from 'react-icons/fa';
import { HiDocumentMagnifyingGlass, HiOutlineAcademicCap } from 'react-icons/hi2';
import { LuClipboardCheck, LuNetwork } from 'react-icons/lu';
import { RiPresentationFill } from 'react-icons/ri';
import { BsListColumnsReverse } from 'react-icons/bs';
import { CiVideoOn } from 'react-icons/ci';
import { TbBrowserShare } from 'react-icons/tb';
import { GiArchiveResearch } from 'react-icons/gi';

// TODO: Try and get PM to move to use just one icon library (fa6?)

const ICON_LIST = [
  // gtrex
  { label: 'Academic Publication', icon: HiOutlineAcademicCap },
  { label: 'Blog', icon: FaBloggerB },
  { label: 'Book or Chapter', icon: FaBook },
  { label: 'Case Study', icon: HiDocumentMagnifyingGlass },
  { label: 'Dashboard or Infographic', icon: FaRegChartBar },
  { label: 'Dataset', icon: FaDatabase },
  { label: 'Guide or Toolkit', icon: LuClipboardCheck },
  { label: 'Magazine or Newspaper Article', icon: FaRegNewspaper },
  { label: 'Podcast', icon: FaPodcast },
  { label: 'Report', icon: FaRegFileLines },
  { label: 'Other', icon: GiArchiveResearch },
  { label: 'Presentation Deck', icon: RiPresentationFill },
  { label: 'Resource Repository', icon: BsListColumnsReverse },
  { label: 'Tools and Models', icon: LuNetwork },
  { label: 'Video', icon: CiVideoOn },
  { label: 'Website or Digital Platform', icon: TbBrowserShare },
  { label: 'External Link', icon: FaExternalLinkAlt },

  // problems-solutions
  { label: 'Problem', icon: FaTriangleExclamation },
  { label: 'Solution', icon: FaLightbulb },
];

export const findIcon = (iconName) => {
  const iconObj = ICON_LIST.find((item) =>
    item.label.toLowerCase().includes(iconName.toLowerCase()),
  );
  return iconObj ? iconObj.icon : null;
};

export const findIconByLabel = (label) => {
  const iconObj = ICON_LIST.find((item) => item.label === label);
  return iconObj ? iconObj.icon : null;
};
