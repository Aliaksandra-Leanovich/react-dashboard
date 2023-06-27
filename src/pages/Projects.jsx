import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import { ProjectChart } from "../components/ProjectsChart/ProjectChart";

export const Projects = () => {
  return (
    <Box m="20px">
      <Header title="Projects Chart" />
      <Box height="75vh">
        <ProjectChart isDashboard={false} />
      </Box>
    </Box>
  );
};
