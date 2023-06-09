import { Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Item } from "./Form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeTrans, updateTrans } from "../api/transaction";

type Props = {
  id: string;
  title: string;
  amount: string;
};

export default function ItemComp({ id, title, amount }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateAmount, setUpdateAmount] = useState(amount);

  const queryClient = useQueryClient();

  //edit Transaction
  const updateTransMutation = useMutation({
    mutationFn: updateTrans,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
  const edit = () => {
    if (editMode) {
      updateTransMutation.mutate({ id, updateTitle, updateAmount });
    }
    setEditMode(!editMode);
  };

  //delete Transaction
  const deleteTransMutation = useMutation({
    mutationFn: removeTrans,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
  const deleteTrans =()=>{
    console.log(id)
    deleteTransMutation.mutate(id);
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
          <Typography variant="small" color="blue-gray" className="font-bold">
            {title}
          </Typography>
        )}
      </td>
      <td className="p-4">
        {editMode ? (
          <input
            className="w-4/5"
            type="number"
            onChange={(e) => setUpdateAmount(e.target.value)}
            value={updateAmount}
          />
        ) : (
          <Typography variant="small" color="blue-gray" className="font-bold">
            {amount}
          </Typography>
        )}
      </td>
      <td className="p-4">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue"
          className="font-medium"
          onClick={() => edit()}
        >
          {!editMode ? "Edit" : "Save"}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue"
          className="font-medium"
          onClick={() => deleteTrans()}
        >
          Del
        </Typography>
      </td>
    </tr>
  );
}
