import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header/Header";
import { mockDataTeam } from "../data/mockData";
import { columns, styles } from "../utilis/rfxTableConsts";

export const RFX = () => {
  return (
    <Box m="20px">
      <Header title="RFX Chart" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={styles}
        borderRadius="40px"
        backgroundColor="white"
        padding="30px"
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
