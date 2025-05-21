import { Box, useTheme, IconButton } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const ToolBar = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      width="100%"
    >
      {/* Search Bar */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={color.primary[400]}
        borderRadius="3px"
        flexBasis="40%"
        minWidth="250px"
        maxWidth="600px"
      >
        <InputBase
          sx={{ ml: 2, flexGrow: 1, color: color.grey[100] }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Right-side icons */}
      <Box display="flex" gap="10px">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ToolBar;
