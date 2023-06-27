import { Box, Typography, useTheme } from "@mui/material";
import { DealsChart } from "../components/DealChart/DealsChart";
import Header from "../components/Header/Header";
import { ProjectChart } from "../components/ProjectsChart/ProjectChart";
import { StageBar } from "../components/StageBar/StageBar";
import { tokens } from "../theme";

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
      </Box>
      {/* Grid & Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(8, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="h5"
                marginBottom="20px"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Projects
              </Typography>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <ProjectChart isDashboard={true} />
          </Box>
        </Box>

        {/* Row 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Count Chart
          </Typography>
          <Box height="250px" mt="-20px">
            <StageBar isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Deals Chart
          </Typography>
          <Box height="250px" mt="-20px">
            <DealsChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
