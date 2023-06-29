import { ResponsiveBar } from "@nivo/bar";
import { mockDataTeam as data } from "../../data/mockData";
import { useSetDealData } from "../../hooks/use-set-deal-data.hook";
import { consts } from "./consts";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const DealsChart = ({ isDashboard = false }) => {
  const { chartDataArray } = useSetDealData(data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      style={{
        height: isDashboard ? "40vh" : "70vh",
        width: isDashboard ? "40vw" : "70vw",
        backgroundColor: "white",
        padding: isDashboard ? "0px" : "20px",
        borderRadius: "40px",
      }}
    >
      <ResponsiveBar
        data={chartDataArray}
        keys={["projects"]}
        indexBy="owner"
        layout="vertical"
        margin={consts.margin}
        axisLeft={consts.axisLeft}
        axisBottom={consts.axisBottom}
        colors={[colors.blueAccent[100]]}
        enableGridY={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={colors.primary[100]}
        enableLabel={true}
        motionStiffness={120}
        motionDamping={16}
      />
    </div>
  );
};
