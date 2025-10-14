import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TodoDetail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todos); // Ottiene to-do dallo store Redux
  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) {
    return <div>Todo non trovato</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Dettagli To-Do {todo.id}</h1>
      <h2 className="text-2xl font-semibold">{todo.title}</h2>
      <p><strong>Completato:</strong> {todo.completed ? "Sì" : "No"}</p>
    </div>
  );
}
