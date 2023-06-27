import { ResponsiveBar } from "@nivo/bar";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetDealData } from "../../hooks/use-set-deal-data.hook";
import { consts } from "./consts";

export const DealsChart = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetDealData(data);

  return (
    <div style={{ height: isDashboard ? "200px" : "600px" }}>
      <ResponsiveBar
        data={chartDataArray}
        keys={["projects"]}
        indexBy="owner"
        layout="vertical"
        margin={consts.margin}
        axisLeft={consts.axisLeft}
        axisBottom={consts.axisBottom}
        colors={["#0f46a0"]}
        enableGridY={true}
        enableLabel={true}
        motionStiffness={120}
        motionDamping={16}
      />
    </div>
  );
};
