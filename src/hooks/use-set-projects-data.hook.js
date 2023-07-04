import { stageOrder } from "../utilis/stageOrder";
import { sortData } from "../utilis/sortDataByTime";

export const useSetProjectsData = (data) => {
  const sortedData = sortData(data);

  const mappedData = sortedData.map((project) => ({
    name: project.name,
    stage: project.stage,
  }));

  const labels = mappedData.map((project) => project.name);
  const values = mappedData.map((project) => project.stage);

  const barColors = values.map((stage) => {
    const matchedStage = stageOrder.find(
      (projectInfo) => projectInfo.stageName === stage
    );
    return matchedStage ? matchedStage.color : "";
  });

  const projectsData = {
    labels: labels,
    datasets: [
      {
        label: "Project Stage",
        data: values,
        backgroundColor: barColors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        type: "category",
        labels: stageOrder.map((project) => project.stageName),
        ticks: {
          color: stageOrder.map((project) => project.color),
        },
      },
    },
  };

  options.plugins = {
    legend: {
      display: false,
    },
  };

  options.layout = {
    padding: {
      right: 0,
    },
  };

  options.datasets = {
    bar: {
      categorySpacing: 0.4,
      barPercentage: 0.8,
    },
  };

  return { projectsData, options };
};
