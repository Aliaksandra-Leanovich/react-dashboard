import { useCallback } from "react";
import { getValues } from "../utilis/getValues";

export const useSetDealData = (data) => {
  const dealData = useCallback(() => {
    return data.reduce((accumulator, project) => {
      const owner = project.owner;

      if (accumulator[owner]) {
        accumulator[owner].projects += 1;
      } else {
        accumulator[owner] = {
          owner,
          projects: 1,
        };
      }

      return accumulator;
    }, {});
  }, [data]);

  const chartDataArray = getValues(dealData());

  return { chartDataArray };
};
