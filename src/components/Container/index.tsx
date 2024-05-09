import { ReactNode } from 'react';
import { StyledContainer } from './style';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme';

interface iChildren {
  children: ReactNode;
}
const Container = ({ children }: iChildren) => {
  const { isLightTheme } = useGlobalContext();
  console.log(isLightTheme);

  const { sidebarIsOpen } = useGlobalContext();

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <StyledContainer sidebarIsOpen={sidebarIsOpen}>
        {children}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Container;
