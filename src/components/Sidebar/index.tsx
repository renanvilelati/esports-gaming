import Logo from '../../../public/logo.png';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { createSidebarMenu } from '../../utils/createSidebarMenu';
import Divider from '../Divider';
import { StyledSidebar } from './style';
import { dataMenu } from './types/menu';

const Sidebar = () => {
  const { sidebarIsOpen } = useGlobalContext();

  return (
    <StyledSidebar sidebarIsOpen={sidebarIsOpen}>
      <div className="logo">
        <img src={Logo} className="logo" alt="Logomarca da empresa" />
      </div>

      <nav>
        <ul className="test">
          {dataMenu.map((item) => {
            return item.code === 'my-team' ? (
              <>
                <li key={item.id}>
                  <a href={`/${item.href}`}>
                    {createSidebarMenu(item.code)}
                    {sidebarIsOpen ? item.label : null}
                  </a>
                </li>
                <Divider />
              </>
            ) : (
              <li key={item.id} className={item.class}>
                <a href={`/${item.href}`}>
                  {createSidebarMenu(item.code)}
                  {sidebarIsOpen ? item.label : null}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
