import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { useState } from 'react';
import { AppRouter } from './router';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { GlobalStyle } from './styles/global';
import { GlobalProvider } from './contexts/GlobalContext';
import Container from './components/Container';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalProvider>
        <Header />
        <Sidebar />
        <Container>
          <AppRouter />
        </Container>
        <GlobalStyle />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
