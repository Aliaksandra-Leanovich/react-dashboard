import React from "react";
import { mockDataTeam as data } from "../../data/mockData";
import { ResponsiveBar } from "@nivo/bar";
import { useSetStagesData } from "../../hooks/use-set-stages-data.hook";
import { consts } from "./consts";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const StageBar = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetStagesData(data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      style={{
        height: isDashboard ? "40vh" : "70vh",
        width: isDashboard ? "56vw" : "70vw",
        backgroundColor: "white",
        padding: isDashboard ? "0px" : "20px",
        borderRadius: "40px",
      }}
    >
      <ResponsiveBar
        data={chartDataArray}
        keys={["efforts"]}
        indexBy="stage"
        layout="vertical"
        margin={consts.margin}
        axisLeft={{
          ...consts.axisLeft,
          tickFormat: (value) => Math.round(value).toString(),
        }}
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
