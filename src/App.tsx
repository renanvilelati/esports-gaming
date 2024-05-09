import { AppRouter } from './router';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { GlobalStyle } from './styles/global';
import { GlobalProvider } from './contexts/GlobalContext';
import Container from './components/Container';

function App() {
  return (
    <GlobalProvider>
      <Container>
        <Header />
        <Sidebar />
        <AppRouter />
        <GlobalStyle />
      </Container>
    </GlobalProvider>
  );
}

export default App;
