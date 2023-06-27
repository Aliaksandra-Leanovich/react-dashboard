import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import { StageBar } from "../components/StageBar/StageBar";

export const Stage = () => {
  return (
    <Box m="20px">
      <Header title="Stage Chart" />
      <Box height="75vh">
        <StageBar isDashboard={false} />
      </Box>
    </Box>
  );
};
