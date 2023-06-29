import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetEffortsData } from "../../hooks/use-set-efforts-data.hook";
import { consts } from "./consts";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const EffortsChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { chartDataArray } = useSetEffortsData(data);

  return (
    <div
      style={{
        height: isDashboard ? "40vh" : "70vh",
        width: isDashboard ? "36vw" : "70vw",
        backgroundColor: "white",
        padding: isDashboard ? "0px" : "20px",
        borderRadius: "40px",
      }}
    >
      <ResponsiveBar
        data={chartDataArray}
        keys={["efforts"]}
        indexBy="owner"
        layout="vertical"
        margin={consts.margin}
        axisLeft={consts.axisLeft}
        axisBottom={consts.axisBottom}
        colors={[colors.blueAccent[100]]}
        enableGridY={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={colors.primary[100]}
        enableLabel={true}
        motionStiffness={120}
        motionDamping={16}
      />
    </div>
  );
};
