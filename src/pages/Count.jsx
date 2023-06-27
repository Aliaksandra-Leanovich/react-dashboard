import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import { CountChart } from "../components/CountChart/CountChart";

export const Count = () => {
  return (
    <Box m="20px">
      <Header title="Count Chart" />
      <Box height="75vh">
        <CountChart />
      </Box>
    </Box>
  );
};
