import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetAmountData } from "../../hooks/use-set-amount-data.hook";
import { consts } from "./consts";

export const AmountChart = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetAmountData(data);

  return (
    <div style={{ height: isDashboard ? "200px" : "600px" }}>
      <ResponsiveBar
        data={chartDataArray}
        keys={["amount"]}
        indexBy="owner"
        layout="vertical"
        margin={consts.margin}
        axisLeft={consts.axisLeft}
        axisBottom={consts.axisBottom}
        colors={["#0f46a0"]}
        enableGridY={false}
        enableLabel={false}
        motionStiffness={120}
        motionDamping={16}
        layoutId="chart"
      />
    </div>
  );
};
