import { useCallback } from "react";
import { getValues } from "../utilis/getValues";

export const useSetEffortsData = (data) => {
  const effortsData = useCallback(() => {
    return data.reduce((accumulator, project) => {
      const owner = project.owner;

      if (accumulator[owner]) {
        accumulator[owner].efforts += parseFloat(
          project.efforts.replace(",", ".")
        );
      } else {
        accumulator[owner] = {
          owner,
          efforts: parseFloat(project.efforts.replace(",", ".")),
        };
      }

      return accumulator;
    }, {});
  }, [data]);

  const chartDataArray = getValues(effortsData());

  return {
    chartDataArray,
  };
};
