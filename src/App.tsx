import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./styles/theme";
import { useState } from "react";
import { AppRouter } from "./router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { GlobalStyle } from "./styles/global";

function App() {

  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Header />
      <Sidebar />
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
