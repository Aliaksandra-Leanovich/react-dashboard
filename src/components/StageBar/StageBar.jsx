import React from "react";
import { mockDataTeam as data } from "../../data/mockData";
import { ResponsiveBar } from "@nivo/bar";
import { useSetStagesData } from "../../hooks/use-set-stages-data.hook";
import { consts } from "./consts";

export const StageBar = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetStagesData(data);

  return (
    <div style={{ height: isDashboard ? "200px" : "600px" }}>
      <ResponsiveBar
        data={chartDataArray}
        keys={["efforts"]}
        indexBy="stage"
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
