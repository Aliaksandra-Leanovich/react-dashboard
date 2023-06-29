export const useSetProjectsData = (data) => {
  const stageOrder = [
    "Closed Won",
    "Analysis",
    "Closed Lost",
    "Negotiation",
    "On Hold",
    "Proporsal",
    "Waiting",
  ];

  const barColors = data.map(() => {
    const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    return randomColor;
  });

  const sortedData = [...data].sort(
    (a, b) => new Date(a.started) - new Date(b.started)
  );

  const mappedData = sortedData.map((project) => ({
    name: project.name,
    stage: project.stage,
  }));

  const labels = mappedData.map((project) => project.name);
  const values = mappedData.map((project) => project.stage);

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
        labels: stageOrder,
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
