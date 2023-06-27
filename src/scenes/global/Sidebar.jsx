import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        height: "100vh",
        "& .pro-sidebar-inner": {
          height: "100vh",
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {},
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#0f46a0 !important",
        },
        "& .pro-menu-item.active": {
          color: "#0f46a0 !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} style={{ height: "100vh" }}>
        <Menu iconsape="square">
          {/* Logo and menu icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <div></div>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* Menu itmes */}
          <Box paddingLeft={isCollapsed ? undefined : "10px"}>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="RFX"
              to="/rfx"
              icon={<AccountTreeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Deals Chart"
              to="/deals"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Efforts Chart"
              to="/efforts"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              set
              Selected={setSelected}
            />
            <Item
              title="Stages Chart"
              to="/stages"
              icon={<AlignVerticalBottomIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Amount Chart"
              to="/amount"
              icon={<AlignVerticalBottomIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Count Chart"
              to="/count"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Projects Chart"
              to="/projects"
              icon={<AlignHorizontalLeftIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
