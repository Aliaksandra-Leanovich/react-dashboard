import { Bar } from "react-chartjs-2";
import { mockDataTeam as data } from "../../data/mockData";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useSetProjectsData } from "../../hooks/use-set-projects-data.hook";

Chart.register(CategoryScale);

export const ProjectChart = ({ isDashboard = false }) => {
  const { projectsData, options } = useSetProjectsData(data);

  return (
    <div
      style={{
        height: isDashboard ? "200px" : "600px",
        width: isDashboard ? "700px" : "1000px",
      }}
    >
      <Bar data={projectsData} options={options} />
    </div>
  );
};
