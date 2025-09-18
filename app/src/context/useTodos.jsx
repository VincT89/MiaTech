import { useContext } from "react";
import { TodosContext } from "./TodosContext";

export function useTodos() {
  const context = useContext(TodosContext);
  if (!context) throw new Error("questo hook deve essere usato all'interno di un TodosProvider");
  return context;
}
