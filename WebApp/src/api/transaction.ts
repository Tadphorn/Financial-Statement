import axios from "axios";

export async function fetchTrans() {
  const response = await axios.get("http://localhost:3000/transactions");
  return response.data;
}

export async function createTrans(newTrans: any) {
  const response = await axios.post(`http://localhost:3000/transactions`, {
    id: newTrans.id,
    title: newTrans.title,
    amount: newTrans.amount,
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
    }
  );
  return response.data;
}
