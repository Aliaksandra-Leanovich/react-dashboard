import { ResponsivePie } from "@nivo/pie";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetCountData } from "../../hooks/use-set-count-data.hook";
import { consts } from "./consts";

export const CountChart = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetCountData(data);

  return (
    <div
      style={{
        height: isDashboard ? "40vh" : "80vh",
        backgroundColor: "white",
        padding: isDashboard ? "0px" : "20px",
        borderRadius: "40px",
      }}
    >
      <ResponsivePie
        data={chartDataArray}
        colors={{ scheme: "blues" }}
        margin={isDashboard ? consts.marginMobile : consts.margin}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        enableSliceLabels={false}
        activeOuterRadiusOffset={8}
        legends={!isDashboard && consts.legends}
      />
    </div>
  );
};
