export const useSetProjectsData = (data) => {
  const stageOrder = [
    { stageName: "Closed Won", color: "#4361ee" },
    { stageName: "Analysis", color: "#a2d2ff" },
    { stageName: "Closed Lost", color: "#023e8a" },
    { stageName: "Negotiation", color: "#48cae4" },
    { stageName: "On Hold", color: "#90e0ef" },
    { stageName: "Proporsal", color: "#0077b6" },
    { stageName: "Waiting", color: "#03045e" },
  ];

  const sortedData = [...data].sort(
    (a, b) => new Date(a.started) - new Date(b.started)
  );

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
