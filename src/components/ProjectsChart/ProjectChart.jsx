import { Bar } from "react-chartjs-2";
import { mockDataTeam as data } from "../../data/mockData";
import { CategoryScale, Title, Tooltip } from "chart.js";
import Chart from "chart.js/auto";
import { useSetProjectsData } from "../../hooks/use-set-projects-data.hook";

Chart.register(CategoryScale, Title, Tooltip);

export const ProjectChart = ({ isDashboard = false }) => {
  const { projectsData, options } = useSetProjectsData(data);

  return (
    <div
      style={{
        height: isDashboard ? "44vh" : "700px",
        width: isDashboard ? "50vw" : "1000px",
      }}
    >
      <Bar data={projectsData} options={options} />
    </div>
  );
};
