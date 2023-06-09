import axios from "axios";

export async function fetchTrans() {
  const response = await axios.get("http://localhost:3000/transactions");
  return response.data;
}

export async function createTrans(newTrans: any) {
  console.log(newTrans.genres);
  const response = await axios.post(`http://localhost:3000/transactions`, {
    id: newTrans.id,
    title: newTrans.title,
    amount: newTrans.amount,
    genres: newTrans.genres,
  });
  return response.data;
}

export async function updateTrans(updatedTrans: any) {
  const response = await axios.patch(
    `http://localhost:3000/transactions/${updatedTrans.id}`,
    {
      id: updatedTrans.id,
      title: updatedTrans.updateTitle,
      amount: updatedTrans.updateAmount,
      genres: updatedTrans.updateGen,
    }
  );
  return response.data;
}

export async function removeTrans(id: string | undefined) {
  const response = await axios.delete(
    `http://localhost:3000/transactions/${id}`
  );
  return response.data;
}
