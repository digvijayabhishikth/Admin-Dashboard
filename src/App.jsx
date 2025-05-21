import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ToolBar from "./scenes/Global/TopBar";
import SideBar from "./scenes/Global/SideBar";
import Dashboard from "./scenes/dashboard/Dashboard";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Use flex layout to show Sidebar and content side by side */}
        <Box display="flex" height="100vh" width="100%">
          <SideBar />
          <Box flex="1" display="flex" flexDirection="column">
            <ToolBar />
            <Box flex="1" p="20px">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Dashboard />} />
                <Route path="/contacts" element={<Dashboard />} />
                <Route path="/invoices" element={<Dashboard />} />
                <Route path="/form" element={<Dashboard />} />
                <Route path="/bar" element={<Dashboard />} />
                <Route path="/pie" element={<Dashboard />} />
                <Route path="/line" element={<Dashboard />} />
                <Route path="/faq" element={<Dashboard />} />
                <Route path="/geography" element={<Dashboard />} />
                <Route path="/calendar" element={<Dashboard />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
