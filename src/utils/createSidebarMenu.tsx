import { BiJoystickButton, BiTrophy } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { GrGroup } from 'react-icons/gr';
import { LuSwords } from 'react-icons/lu';
import {
  MdOutlineAccountCircle,
  MdOutlineForum,
  MdPowerSettingsNew,
} from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';

export const createSidebarMenu = (code: string) => {
  switch (code) {
    case 'account':
      return <MdOutlineAccountCircle size={24} />;
    case 'my-team':
      return <GrGroup size={24} />;
    case 'dashboard':
      return <RxDashboard size={24} />;
    case 'games':
      return <BiJoystickButton size={24} />;
    case 'players':
      return <FiUsers size={24} />;
    case 'tournaments':
      return <BiTrophy size={24} />;
    case 'matches':
      return <LuSwords size={24} />;
    case 'community':
      return <MdOutlineForum size={24} />;
    case 'logout':
      return <MdPowerSettingsNew size={24} />;
  }
};
