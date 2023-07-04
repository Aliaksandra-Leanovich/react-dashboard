import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import { StageBar } from "../components/StageBar/StageBar";

export const Stage = () => {
  return (
    <Box m="20px">
      <Header title="Stages vs Efforts Chart" />
      <Box height="75vh">
        <StageBar />
      </Box>
    </Box>
  );
};
