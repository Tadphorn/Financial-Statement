//tsrfc
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTrans } from "../api/transaction";

export type Item = {
  id: string;
  title: string;
  amount: string;
  // Define other properties of Item
};

type Props = {};

export default function Form({}: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const inputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const queryClient = useQueryClient();
  const createTransMutation = useMutation({
    mutationFn: createTrans,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });

  //   const handleAddPost = (itemData: Item) => {
  //     createTransMutation.mutate({
  //       ...itemData,
  //     });
  //   };

  const saveItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: amount,
    };
    createTransMutation.mutate({
      ...itemData,
    });
    // onAddItem(itemData);
    setTitle("");
    setAmount("");
  };

  return (
    <div className="">
      <form className="flex w-max gap-8" onSubmit={saveItem}>
        <div className="form-control flex flex-col space-y-3">
          <label className="text-xl ">ชื่อรายการ</label>
          <Input
            size="lg"
            label="ระบุชื่อรายการ"
            type="text"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control flex flex-col space-y-3">
          <label className="text-xl">จำนวนเงิน</label>
          <Input
            size="lg"
            label="ระบุจำนวนเงิน"
            type="number"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div className="pt-9">
          <Button size="lg" type="submit" className="btn" disabled={!title}>
            บันทึก
          </Button>
        </div>
      </form>
    </div>
  );
}
