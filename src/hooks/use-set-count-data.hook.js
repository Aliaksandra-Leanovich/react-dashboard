import { useCallback } from "react";

export const useSetCountData = (data) => {
  const countData = useCallback(() => {
    return data.reduce((accumulator, project) => {
      const stage = project.stage;

      if (accumulator[stage]) {
        accumulator[stage] += 1;
      } else {
        accumulator[stage] = 1;
      }

      return accumulator;
    }, {});
  }, [data]);

  const chartDataArray = Object.entries(countData()).map(([stage, count]) => ({
    id: stage,
    label: stage,
    value: count,
  }));

  return { chartDataArray };
};
