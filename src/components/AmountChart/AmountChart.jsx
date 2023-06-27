import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetAmountData } from "../../hooks/use-set-amount-data.hook";

export const AmountChart = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetAmountData(data);

  return (
    <div style={{ height: isDashboard ? "200px" : "600px" }}>
      <ResponsiveBar
        data={chartDataArray}
        keys={["amount"]}
        indexBy="owner"
        layout="vertical"
        margin={{ top: 50, right: 30, bottom: 50, left: 120 }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Deal Owners",
          legendPosition: "middle",
          legendOffset: -90,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Amount",
          legendPosition: "middle",
          legendOffset: 40,
        }}
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
