export const columns = [
  {
    field: "name",
    headerName: "Deal Name",
    cellClassName: "name-column--cell",
    width: 200,
  },
  {
    field: "owner",
    headerName: "Deal Owner",
    width: 200,
  },
  {
    field: "account",
    headerName: "Account Name",
    width: 200,
  },
  {
    field: "shipping",
    headerName: "Shipping Country",
    width: 150,
  },
  {
    field: "model",
    headerName: "Business Model",
    width: 150,
  },
  {
    field: "technology",
    headerName: "Technology",
    width: 250,
  },
  {
    field: "stage",
    headerName: "Stage",
    width: 200,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
  },
  {
    field: "spent",
    headerName: "Amount Spent",
    width: 150,
  },
  {
    field: "efforts",
    headerName: "Efforts, h",
    width: 150,
  },
];

export const styles = {
  "& .MuiDataGrid-cell": { borderBottom: "none" },
  "& .name-column--cell": { color: "black" },

  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: "white",
  },

  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    backgroundColor: "#0f46a0",
    color: "white",
  },

  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#0f46a0",
    color: "white",
    borderBottom: "none",
    fontWeight: "600",
  },

  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: "#f5f5f5",
  },

  "& .MuiDataGrid-root": {
    border: "none",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },

  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#e0e0e0",
  },

  "& .MuiDataGrid-columnHeader": {
    flex: 1,
  },

  "& .MuiTablePagination-root": {
    color: "white",
  },

  " & .MuiTablePagination-selectIcon ": {
    color: "white",
  },

  " & .MuiTablePagination-actions": {
    color: "white",
  },

  " & .MuiDataGrid-selectedRowCount ": {
    visibility: "hidden",
  },

  ".MuiDataGrid-columnSeparator": {
    display: "none",
  },

  "&.MuiDataGrid-root": {
    border: "none",
  },
};
