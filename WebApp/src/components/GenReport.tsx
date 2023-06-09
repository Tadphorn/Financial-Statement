import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { fetchTrans } from "../api/transaction";
import React, { useEffect } from "react";
import { Chart, initTE } from "tw-elements";
import { Item } from "./Form";

type Props = {};
export default function GenReport({}: Props) {
  const genInfo = [
    "Income",
    "Personal care",
    "Housing",
    "Food",
    "Transportation",
    "Education",
    "Entertainment",
    "Debt payments",
    "Other",
  ];
  const allPayment: any = [];
  //calculate
  const report = () => {
    // const amount = items.map((items) => parseInt(items.amount));
    // setIncome(
    //   amount.filter((val) => val >= 0).reduce((total, val) => (total += val), 0)
    // );

    genInfo.forEach((gen, index) => {
      // allPayment.push(gen);
      // allPayment =
    });
    console.log(allPayment);
  };

  useEffect(() => {
    initTE({ Chart });
  }, []);

  return (
    <div className="mx-auto w-2/6 overflow-hidden">
      <button onClick={report}>report</button>
      <canvas
        data-te-chart="doughnut"
        data-te-dataset-label="Traffic"
        data-te-labels={JSON.stringify(genInfo)}
        data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
        data-te-dataset-background-color="['rgba(63, 81, 181, 0.5)', 'rgba(77, 182, 172, 0.5)', 'rgba(66, 133, 244, 0.5)', 'rgba(156, 39, 176, 0.5)', 'rgba(233, 30, 99, 0.5)', 'rgba(66, 73, 244, 0.4)', 'rgba(66, 133, 244, 0.2)']"
      ></canvas>
    </div>
  );
}
