
import ItemContext from "@/context/Context";
import { Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Item } from "./Form";

type Props = {
    id: string;
    title: string;
    amount: string;
}

export default function ItemComp({ id, title, amount }: Props) {
    const [editMode, setEditMode] = useState(false);
    const [updateTitle, setUpdateTitle] = useState(title)
    const [updateAmount, setUpdateAmount] = useState(amount)


    const context = useContext(ItemContext);

    const edit = () => {
        setUpdateTitle(title)
        setUpdateAmount(amount)
        if (editMode) {
            // console.log(
            context?.setItems(
                context?.items.map((item: Item) => {
                    if (item.id == id) {
                        item.title = updateTitle
                        item.amount = updateAmount
                    }
                    return item
                })
            );
        }
        setEditMode(!editMode)
    }
    return (

        <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
                {editMode ? (
                    <input
                        className="w-4/5 bg-gray-200"
                        type="text"
                        onChange={(e) => setUpdateTitle(e.target.value)}
                        value={updateTitle}
                    />
                ) : (
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {title}
                    </Typography>
                )}

            </td>
            <td className="p-4">

                {editMode ? (
                    <input
                        className="w-4/5 bg-gray-200"
                        type="number"
                        onChange={(e) => setUpdateAmount(e.target.value)}
                        value={updateAmount}
                    />
                ) : (
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {amount}
                    </Typography>
                )}

            </td>
            <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue" className="font-medium" onClick={() => edit()} >
                    {!editMode ? "Edit" : "Save"}
                </Typography>
            </td>
        </tr>


    )
}
