import { ResponsiveBar } from "@nivo/bar";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetDealData } from "../../hooks/use-set-deal-data.hook";

export const DealsChart = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetDealData(data);

  return (
    <div style={{ height: isDashboard ? "200px" : "600px" }}>
      <ResponsiveBar
        data={chartDataArray}
        keys={["projects"]}
        indexBy="owner"
        layout="vertical"
        margin={{ top: 50, right: 30, bottom: 50, left: 120 }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Deal Owner",
          legendPosition: "middle",
          legendOffset: -40,
          tickValues: 4,
          tickFormat: (value) => Math.round(value),
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Count of Projects",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        colors={["#0f46a0"]}
        enableGridY={true}
        enableLabel={true}
        motionStiffness={120}
        motionDamping={16}
      />
    </div>
  );
};
