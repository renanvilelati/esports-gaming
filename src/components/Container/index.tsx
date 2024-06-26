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

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <StyledContainer>
        {children}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Container;
