import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Logo from '../../../public/logo.png';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { createSidebarMenu } from '../../utils/createSidebarMenu';
import Divider from '../Divider';
import { StyledSidebar } from './style';
import { dataMenu } from './types/menu';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { sidebarIsOpen, isLightTheme, handleOpenSidebar } = useGlobalContext();

  return (
    <StyledSidebar sidebarIsOpen={sidebarIsOpen} isLightTheme={isLightTheme}>
      <div className="logo">
        <img src={Logo} className="logo" alt="Logomarca da empresa" />
      </div>

      <button className="menu-open-btn" onClick={handleOpenSidebar}>
        {sidebarIsOpen ? <SlArrowLeft size={12} /> : <SlArrowRight size={12} />}
      </button>

      <nav>
        <ul className="test">
          {dataMenu.map((item) => {
            return item.code === 'my-team' ? (
                <li key={item.id} className="myTeamItem">
                  <Link to={`/${item.href}`}>
                    {createSidebarMenu(item.code)}
                    {sidebarIsOpen ? item.label : null}
                  </Link>
                  <Divider />
                </li>
            ) : (
              <li key={item.id} className={item.class}>
                <Link to={`/${item.href}`}>
                  {createSidebarMenu(item.code)}
                  {sidebarIsOpen ? item.label : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
