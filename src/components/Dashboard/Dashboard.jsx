import { Box, Typography, useTheme } from "@mui/material";
import { DealsChart } from "../DealChart/DealsChart";
import Header from "../Header/Header";
import { ProjectChart } from "../ProjectsChart/ProjectChart";
import { StageBar } from "../StageBar/StageBar";
import { tokens } from "../../theme";
import { BoxSC, ContainerSC, ChartSC, MainGridSC, WrapperSC } from "./style";
import { CountChart } from "../CountChart/CountChart";
import { EffortsChart } from "../EffortsChart/EffortsChart";
import { AmountChart } from "../AmountChart/AmountChart";

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <WrapperSC>
      <ContainerSC>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" />
        </Box>
        <BoxSC>
          <MainGridSC>
            <ChartSC>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.grey[100]}
              >
                RFX Chart
              </Typography>
              <ProjectChart isDashboard={true} />
            </ChartSC>
            <ChartSC>
              <Typography
                variant="h4"
                fontWeight="600"
                marginLeft="10px"
                color={colors.grey[100]}
              >
                Efforts vs Deal Owners Chart
              </Typography>
              <EffortsChart isDashboard={true} />
            </ChartSC>
          </MainGridSC>
          <MainGridSC>
            <ChartSC>
              <Typography
                variant="h4"
                fontWeight="600"
                marginLeft="10px"
                color={colors.grey[100]}
              >
                Count of Stages Chart
              </Typography>
              <AmountChart isDashboard={true} />
            </ChartSC>
            <ChartSC>
              <Typography
                variant="h4"
                fontWeight="600"
                marginLeft="10px"
                color={colors.grey[100]}
              >
                Amount vs Deal Owners Chart
              </Typography>
              <CountChart isDashboard={true} />
            </ChartSC>
          </MainGridSC>
          <MainGridSC>
            <ChartSC>
              <Typography
                variant="h4"
                fontWeight="600"
                marginLeft="10px"
                color={colors.grey[100]}
              >
                Count of Deals Chart
              </Typography>
              <DealsChart isDashboard={true} />
            </ChartSC>
            <ChartSC>
              <Typography
                variant="h4"
                fontWeight="600"
                marginLeft="10px"
                color={colors.grey[100]}
              >
                Stages vs Efforts Chart
              </Typography>
              <StageBar isDashboard={true} />
            </ChartSC>
          </MainGridSC>
        </BoxSC>
      </ContainerSC>
    </WrapperSC>
  );
};
