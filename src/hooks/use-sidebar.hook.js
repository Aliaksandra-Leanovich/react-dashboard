import { useState } from "react";

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const handleClick = () => {
    setIsCollapsed(true);
    document.body.style.overflow = "auto";
  };

  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed);
    document.body.style.overflow = !isCollapsed ? "auto" : "hidden";
  };

  return {
    isCollapsed,
    handleClick,
    handleButtonClick,
    selected,
    setSelected,
  };
};
