import { StyledHeader } from './style';
import { BiSearch, BiSun } from 'react-icons/bi';
import { BsFillMoonStarsFill, BsDiamondFill } from 'react-icons/bs';
import { IoIosArrowDown, IoMdNotificationsOutline  } from 'react-icons/io';
import { useGlobalContext } from '../../contexts/GlobalContext';

const Header = () => {

  const {isLightTheme, handleChangeTheme} = useGlobalContext()


  return (
    <StyledHeader isLightTheme={isLightTheme}>
      <div className="input-wrapper">
        <BiSearch size={20} />
        <input type="text" placeholder='Type / to search' />
      </div>

      <div className="profile-wrapper">
        <div className="theme-btn" onClick={handleChangeTheme}>
          <BsFillMoonStarsFill className={isLightTheme ? 'theme-icon' : 'theme-btn-active theme-icon'} size={24} />
          <BiSun className={isLightTheme ? 'theme-btn-active theme-icon' : 'theme-icon'} size={24} />
        </div>

        <div className="notification">
          <IoMdNotificationsOutline className='notification-icon'  size={24} />
          <span className="bullet"></span>
        </div>

        <div className="profile">
          <div className="avatar">
            <img src="avatar.png" alt="User picture" />
          </div>
          <div className="text">
            <span className='user-name'>Renanvilela</span>
            <div className="score">
              <BsDiamondFill className="diamond" size={10} />
              <span>5700</span> 
              <IoIosArrowDown className="arrow-down" size={12} />
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
