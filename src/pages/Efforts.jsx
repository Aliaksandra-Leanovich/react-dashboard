import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import { EffortsChart } from "../components/EffortsChart/EffortsChart";

export const Efforts = () => {
  return (
    <Box m="20px">
      <Header title="Efforts Chart" />
      <Box height="75vh">
        <EffortsChart isDashboard={false} />
      </Box>
    </Box>
  );
};
