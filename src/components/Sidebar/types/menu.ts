interface iDataMenu {
  id: number;
  href: string;
  label: string;
  code: string;
  icon: string;
  class: string;
}

export const dataMenu: iDataMenu[] = [
  { id: 1, href: 'account', label: 'Account', code: 'account' ,icon: 'MdOutlineAccountCircle', class: '' },
  { id: 2, href: 'my-team', label: 'My Team', code: 'my-team' ,icon: 'GrGroup', class: '' },
  { id: 3, href: '', label: 'Dashboard', code: 'dashboard' ,icon: 'RxDashboard', class: 'active' },
  { id: 4, href: 'games', label: 'Games', code: 'games' ,icon: 'BiJoystickButton', class: '' },
  { id: 5, href: 'players', label: 'Players', code: 'players' ,icon: 'FiUsers', class: '' },
  { id: 6, href: 'tournaments', label: 'Tournaments', code: 'tournaments' ,icon: 'BiTrophy', class: '' },
  { id: 7, href: 'matches', label: 'Matches', code: 'matches' ,icon: 'LuSwords', class: '' },
  { id: 8, href: 'community', label: 'Community', code: 'community' ,icon: 'MdOutlineForum', class: '' },
  { id: 9, href: 'logout', label: 'Logout', code: 'logout' ,icon: 'MdPowerSettingsNew', class: '' },
];
