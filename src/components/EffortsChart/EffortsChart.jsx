import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetEffortsData } from "../../hooks/use-set-efforts-data.hook";

export const EffortsChart = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetEffortsData(data);

  return (
    <div style={{ height: isDashboard ? "200px" : "600px" }}>
      <ResponsiveBar
        data={chartDataArray}
        keys={["efforts"]}
        indexBy="owner"
        layout="vertical"
        margin={{ top: 50, right: 30, bottom: 50, left: 120 }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Efforts",
          legendPosition: "middle",
          legendOffset: -90,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Deal Owners",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        colors={["#0f46a0"]}
        enableGridY={false}
        enableLabel={false}
        motionStiffness={120}
        motionDamping={16}
      />
    </div>
  );
};
