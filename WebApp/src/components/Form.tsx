//tsrfc
import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import ItemContext from '@/context/Context';

export type Item = {
    id: string
    title: string;
    amount: string;
    // Define other properties of Item
};
type OnAddItemCallback = (item: Item) => void;

type Props = {
    onAddItem: OnAddItemCallback;
};


export default function Form({ onAddItem }: Props) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const inputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const inputAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value)
    }
    const saveItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: amount
        }
        onAddItem(itemData)
        setTitle('')
        setAmount('')
    }

    return (
        <div className=''>
            <form className='flex w-max gap-8' onSubmit={saveItem}>
                <div className="form-control flex flex-col space-y-3">
                    <label className='text-xl '>ชื่อรายการ</label>
                    <Input size="lg" label="ระบุชื่อรายการ" type="text" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control flex flex-col space-y-3">
                    <label className='text-xl'>จำนวนเงิน</label>
                    <Input size="lg" label="ระบุจำนวนเงิน" type="number" onChange={inputAmount} value={amount} />
                </div>
                <div className="pt-9">
                    <Button size="lg" type="submit" className="btn" disabled={!title}>บันทึก</Button>
                </div>
            </form>
        </div>
    )
}