import { Item } from "@/components/Form";
import { createContext } from "react";

export const ItemContext = createContext<{
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
} | undefined>(undefined);

export default ItemContext