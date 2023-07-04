import { Typography, useTheme } from "@mui/material";
import React from "react";
import { MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

export const ItemSidebar = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  handleClick,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleSelectedClick = () => {
    handleClick();
    setSelected(title);
  };

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={handleSelectedClick}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
