import { useCallback } from "react";
import { getValues } from "../utilis/getValues";

export const useSetAmountData = (data) => {
  const processData = useCallback(() => {
    return data.reduce((accumulator, project) => {
      const { owner, amount } = project;

      if (accumulator[owner]) {
        accumulator[owner].amount += Number(amount);
      } else {
        accumulator[owner] = {
          owner,
          amount: Number(amount),
        };
      }

      return accumulator;
    }, {});
  }, [data]);

  const chartDataArray = getValues(processData());

  return { chartDataArray };
};
