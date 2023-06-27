import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetEffortsData } from "../../hooks/use-set-efforts-data.hook";
import { consts } from "./consts";

export const EffortsChart = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetEffortsData(data);

  return (
    <div style={{ height: isDashboard ? "200px" : "600px" }}>
      <ResponsiveBar
        data={chartDataArray}
        keys={["efforts"]}
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
      />
    </div>
  );
};
