import Transaction from "@/components/Transaction";
import Form, { Item } from "@/components/Form";
import { useContext, useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Summary from "./components/Summary";
import { useQuery } from "@tanstack/react-query";
import { fetchTrans } from "./api/transaction";
import { stringify } from "querystring";
import { json } from "stream/consumers";
type Props = {};

export default function App({}: Props) {
  const {
    data: moneys,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTrans,
  });

  if (isLoading) return <div>"loading..."</div>;
  if (error instanceof Error) return <div>`Error: ${error.message}`</div>;

  return (
    <div>
      {/* <p>{stringify.JSON(reversed)}</p> */}
      {/* {moneys.map((money: any) => (
        <p key={money.id}>{money.title}</p>
      ))} */}
      <div className="main">
        <h1 className="text-5xl p-10">Income-Expense App</h1>
        <Form />
        <div className="pt-10 pb-10">
          <Transaction items={moneys} />
        </div>
        <Summary items={moneys}></Summary>
      </div>
    </div>
  );
}
