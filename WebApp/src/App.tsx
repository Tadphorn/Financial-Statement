
import Transaction from "@/components/Transaction";
import Form, { Item } from "@/components/Form";
import { useContext, useEffect, useState } from "react";
import ItemContext from '@/context/Context';
import { Card, Typography } from "@material-tailwind/react";
import Summary from "./components/Summary";

type Props = {}


export default function App({ }: Props) {
  const [items, setItems] = useState<Item[]>([])
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  //newItem from child component
  const onAddNewItem = (newItem: Item) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  }


  return (
    <div>
      <div className='main'>
        <h1 className='text-5xl p-10'>Income-Expense App</h1>
        <ItemContext.Provider value={{ items, setItems }}>
          <Form onAddItem={onAddNewItem}></Form>
          <div className='pt-10 pb-10'>
            <Transaction items={items} />
          </div>
        </ItemContext.Provider>
        <Summary items={items}></Summary>
      </div>

    </div>

  )
}