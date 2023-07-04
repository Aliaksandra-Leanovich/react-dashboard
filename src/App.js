import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouter } from "./router/AppRouter";
import Sidebar from "./components/Sidebar/Sidebar";

import { ColorModeContext, useMode } from "./theme";

export const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <AppRouter />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
