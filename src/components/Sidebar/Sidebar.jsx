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
import { tokens } from "../../theme";
import { ItemSidebar } from "../ItemSidebar/ItemSidebar";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const styles = {
    height: "100vh",
    position: "fixed",
    zIndex: "2",
    background: `white !important`,
    "& .pro-sidebar-inner": {
      height: "100vh",
      background: `white !important`,
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
  };

  const handleClick = () => {
    setIsCollapsed(true);
    document.body.style.overflow = isCollapsed && "auto";
  };

  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed);

    document.body.style.overflow = !isCollapsed ? "auto" : "hidden";
  };

  return (
    <Box sx={styles} flex={1}>
      <ProSidebar collapsed={isCollapsed} style={{ height: "100vh" }}>
        <Menu iconsape="square">
          <MenuItem
            onClick={handleButtonClick}
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
                <IconButton onClick={handleButtonClick}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10px"}>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <ItemSidebar
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              handleClick={handleClick}
            />
            <ItemSidebar
              title="RFX"
              to="/rfx"
              icon={<AccountTreeIcon />}
              selected={selected}
              setSelected={setSelected}
              handleClick={handleClick}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <ItemSidebar
              title="Deals Chart"
              to="/deals"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              handleClick={handleClick}
            />
            <ItemSidebar
              title="Efforts Chart"
              to="/efforts"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              set
              Selected={setSelected}
              handleClick={handleClick}
            />
            <ItemSidebar
              title="Stages Chart"
              to="/stages"
              icon={<AlignVerticalBottomIcon />}
              selected={selected}
              setSelected={setSelected}
              handleClick={handleClick}
            />
            <ItemSidebar
              title="Amount Chart"
              to="/amount"
              icon={<AlignVerticalBottomIcon />}
              selected={selected}
              setSelected={setSelected}
              handleClick={handleClick}
            />

            <ItemSidebar
              title="Count Chart"
              to="/count"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              handleClick={handleClick}
            />
            <ItemSidebar
              title="Projects Chart"
              to="/projects"
              icon={<AlignHorizontalLeftIcon />}
              selected={selected}
              setSelected={setSelected}
              handleClick={handleClick}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
