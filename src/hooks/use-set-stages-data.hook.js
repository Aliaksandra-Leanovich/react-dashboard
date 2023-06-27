import { useCallback } from "react";
import { getValues } from "../utilis/getValues";

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

  const chartDataArray = getValues(stagesData());

  return { chartDataArray };
};
