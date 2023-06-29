import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetAmountData } from "../../hooks/use-set-amount-data.hook";
import { consts } from "./consts";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const AmountChart = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetAmountData(data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div style={{ height: isDashboard ? "40vh" : "600px" }}>
      <ResponsiveBar
        data={chartDataArray}
        keys={["amount"]}
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
        layoutId="chart"
      />
    </div>
  );
};
