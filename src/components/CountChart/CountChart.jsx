import { ResponsivePie } from "@nivo/pie";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetCountData } from "../../hooks/use-set-count-data.hook";

export const CountChart = () => {
  const { chartDataArray } = useSetCountData(data);

  return (
    <div style={{ height: "500px" }}>
      <ResponsivePie
        data={chartDataArray}
        colors={{ scheme: "blues" }}
        margin={{ top: 50, right: 80, bottom: 70, left: 80 }}
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
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};
