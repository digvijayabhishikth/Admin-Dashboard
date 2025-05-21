import { useState, useEffect } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


import Photo from "../../assets/vite.svg";

const Item = ({ title, to, icon, selected, setSelected }) => (
  <MenuItem
    active={selected === title}
    icon={icon}
    onClick={() => setSelected(title)}
    component={<Link to={to} />}
  >
    <Typography variant="body1">{title}</Typography>
  </MenuItem>
);

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [selected, setSelected] = useState("Dashboard");

  // Automatically collapse/expand on screen resize
  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  return (
    <Sidebar
      collapsed={isCollapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.primary[400],
          height: "100vh",
          borderRight: "none",
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "8px 20px",
            color: colors.grey[100],
            "&:hover": {
              color: colors.grey[900],
              backgroundColor: colors.primary[300],
            },
            "&.ps-active": {
              color: "#6870fa",
            },
          },
          icon: {
            color: colors.grey[100],
          },
        }}
      >
        {/* Toggle Button */}
        <MenuItem style={{ margin: "10px 0 20px 0" }}>
          <Box
            display="flex"
            justifyContent={isCollapsed ? "center" : "space-between"}
            alignItems="center"
            width="100%"
            onClick={() => setIsCollapsed(!isCollapsed)}
            sx={{ cursor: "pointer" }}
          >
            {!isCollapsed && (
              <Typography variant="h4" color={colors.grey[100]} ml="10px">
                ADMINIS
              </Typography>
            )}
            <IconButton>
              <MenuOutlinedIcon sx={{ color: colors.grey[100] }} />
            </IconButton>
          </Box>
        </MenuItem>

        {/* Profile Info */}
        {!isCollapsed && (
          <Box mb="20px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="40px"
                height="40px"
                src={Photo}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center" mt="10px">
              <Typography
                variant="h6"
                color={colors.grey[100]}
                fontWeight="600"
              >
                Digvijay
              </Typography>
              <Typography variant="body2" color={colors.greenAccent[500]}>
                Admin
              </Typography>
            </Box>
          </Box>
        )}

        {/* Sidebar Items */}
        <Box paddingLeft={isCollapsed ? undefined : "10px"}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="subtitle2"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Contacts"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Invoices"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="subtitle2"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="FAQ"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="subtitle2"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
