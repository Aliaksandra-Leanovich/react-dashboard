import { useCallback } from "react";

export const useSetStagesData = (data) => {
  const stagesData = useCallback(() => {
    return data.reduce((accumulator, project) => {
      const stage = project.stage;

      if (accumulator[stage]) {
        accumulator[stage].efforts += parseFloat(
          project.efforts.replace(",", ".")
        );
      } else {
        accumulator[stage] = {
          stage,
          efforts: parseFloat(project.efforts.replace(",", ".")),
        };
      }

      return accumulator;
    }, {});
  }, [data]);

  const chartDataArray = Object.values(stagesData()).map((item) => ({
    ...item,
    efforts: Math.round(item.efforts),
  }));

  return { chartDataArray };
};
