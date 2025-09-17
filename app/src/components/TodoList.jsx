import React from "react";
import useFetch from "../hooks/useFetch";

function TodoList() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

  if (loading) {
    return <p>Caricamento....</p>
  };

  if (error) {
    return <p>Errore: { error}</p>
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-">Lista To-do</h2>
      <ul>
        {data.map((todo) => (
          <li>
            <strong>{ todo.title}</strong> - {todo.completed ? "Completato" : "Non completato"}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TodoList;