export const useSetProjectsData = (data) => {
  const projectStatuses = [...new Set(data.map((project) => project.stage))];

  const projectsData = {
    labels: data.map((project) => project.name),
    datasets: [
      {
        label: "Project Status",
        data: data.map((project) => project.stage),
        backgroundColor: "#0652DD",
        borderColor: "#0652DD",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        type: "category",
        labels: projectStatuses,
      },
    },
  };

  return { projectsData, options };
};
