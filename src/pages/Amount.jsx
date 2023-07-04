import { Box } from "@mui/material";
import { AmountChart } from "../components/AmountChart/AmountChart";
import Header from "../components/Header/Header";

export const Amount = () => {
  return (
    <Box m="20px">
      <Header title="Amount vs Deal Owners Chart" />
      <Box height="75vh">
        <AmountChart />
      </Box>
    </Box>
  );
};
