import {
  MdDashboard,
  MdReceiptLong,
  MdTableChart,
  MdViewInAr,
} from "react-icons/md";
import {
  FiBell,
  FiBarChart2,
  FiCreditCard,
  FiGrid,
  FiLogIn,
  FiSearch,
  FiSettings,
  FiStar,
  FiUser,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";

const ICON_MAP = {
  dashboard: MdDashboard,
  table: MdTableChart,
  billing: MdReceiptLong,
  vr: MdViewInAr,
  rtl: FiGrid,
  notifications: FiBell,
  profile: FiUser,
  signin: FiLogIn,
  signup: FiUserPlus,
  wallet: FiCreditCard,
  users: FiUsers,
  analytics: FiBarChart2,
  "credit-card": FiCreditCard,
  search: FiSearch,
  settings: FiSettings,
  bell: FiBell,
  star: FiStar,
  avatar: FiUser,
};

export function resolveIcon(iconKey) {
  return ICON_MAP[iconKey] || FiGrid;
}
