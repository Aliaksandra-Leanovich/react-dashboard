export const columns = [
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

export const styles = {
  "& .MuiDataGrid-root": { border: "none" },
  "& .MuiDataGrid-cell": { borderBottom: "none" },
  "& .name-column--cell": { color: "white" },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#0f46a0",
    color: "white",
    borderBottom: "none",
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: "white",
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    backgroundColor: "#0f46a0",
    color: "white",
  },
};
