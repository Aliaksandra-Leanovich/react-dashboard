import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header/Header";
import { mockDataTeam } from "../data/mockData";
import { columns, styles } from "../utilis/rfxTableConsts";

export const RFX = () => {
  return (
    <Box m="20px">
      <Header title="RFX Chart" />
      <Box sx={styles}>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
