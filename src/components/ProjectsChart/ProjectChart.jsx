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
        height: isDashboard ? "44vh" : "80vh",
        width: isDashboard ? "50vw" : "80vw",
        backgroundColor: "white",
        padding: isDashboard ? "0px" : "20px",
        borderRadius: "40px",
      }}
    >
      <Bar data={projectsData} options={options} />
    </div>
  );
};
