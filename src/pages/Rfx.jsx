import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataTeam } from "../data/mockData";
import Header from "../components/Header/Header";

export const RFX = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Deal Name",
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",
    },
    {
      field: "owner",
      headerName: "Deal Owner",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "account",
      headerName: "Account Name",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "shipping",
      headerName: "Shipping Country",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "model",
      headerName: "Business Model",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "technology",
      headerName: "Technology",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "stage",
      headerName: "Stage",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "amount",
      headerName: "Amount",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "spent",
      headerName: "Amount Spent",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "efforts",
      headerName: "Efforts, h",
      headerAlign: "left",
      align: "left",
    },
  ];

  const styles = {
    "& .MuiDataGrid-root": { border: "none" },
    "& .MuiDataGrid-cell": { borderBottom: "none" },
    "& .name-column--cell": { color: colors.greenAccent[300] },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#0f46a0",
      color: "white",
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: "#0f46a0",
      color: "white",
    },
  };

  return (
    <Box m="20px">
      <Header title="RFX" />
      <Box m="40px 0 0 0" height="75vh" sx={styles}>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
