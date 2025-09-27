import { useParams } from "react-router-dom";
import { useTodos } from "../context/useTodos";

export default function TodoDetail() {
  const { id } = useParams();
  const { todos } = useTodos();
  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Dettagli To-Do {todo.id}</h1>
      <h2 className="text-2xl font-semibold">{todo.title}</h2>
      <p>{todo.description}</p>
      <p><strong>Completato:</strong> {todo.completed ? "Sì" : "No"}</p>
    </div>
  );
}