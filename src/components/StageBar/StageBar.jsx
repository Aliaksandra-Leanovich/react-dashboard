import React from "react";
import { mockDataTeam as data } from "../../data/mockData";
import { ResponsiveBar } from "@nivo/bar";
import { useSetStagesData } from "../../hooks/use-set-stages-data.hook";

export const StageBar = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetStagesData(data);

  return (
    <div style={{ height: isDashboard ? "200px" : "600px" }}>
      <ResponsiveBar
        data={chartDataArray}
        keys={["efforts"]}
        indexBy="stage"
        layout="vertical"
        margin={{ top: 50, right: 30, bottom: 50, left: 120 }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Sum of Efforts",
          legendPosition: "middle",
          legendOffset: -90,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Stages",
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
