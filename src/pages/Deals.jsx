import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import { DealsChart } from "../components/DealChart/DealsChart";

export const Deals = () => {
  return (
    <Box m="20px">
      <Header title="Count of Deals Chart" />
      <Box height="75vh">
        <DealsChart />
      </Box>
    </Box>
  );
};
