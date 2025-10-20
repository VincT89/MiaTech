import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, toggleComplete } from "../store/features/todoSlice";
import { Link, useSearchParams } from "react-router-dom";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos); // Ottieni i to-do dallo store Redux
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef(null);

  // legge il termine di ricerca dalla query
  const inputRicerca = searchParams.get("q") || "";

  useEffect(() => {
    dispatch(fetchTodos("https://jsonplaceholder.typicode.com/todos"));
  }, [dispatch]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  // aggiorna i parametri della query quando l'input cambia
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { q: value } : {}); // Aggiorna i parametri della query
  };

  // Funzione per gestire il click e segnare il to-do come completato
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id)); // Dispatch per segnare il to-do come completato
  };

  // Filtra i to-do in base alla ricerca
  const todosFiltrati = useMemo(() => {
    if (!todos) return [];
    const terminiRicerca = inputRicerca.toLowerCase();
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(terminiRicerca)
    );
  }, [todos, inputRicerca]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div className="mt-30 w-full border p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Lista To-Do</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Cerca TO-DO..."
        value={inputRicerca}
        onChange={handleInputChange}
        className="border rounded-2xl p-2 mb-4 w-full"
      />
      <div className="h-80 w-200 overflow-y-auto">
        <ul>
          {todosFiltrati.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center">
              <Link
                to={`/todo/${todo.id}`}
                className="text-blue-500 hover:underline"
              >
                <strong>{todo.title}</strong>
              </Link>
              <button
                onClick={() => handleToggleComplete(todo.id)}
                className="ml-4 mb-2 rounded"
              >
                {todo.completed ? "Completato" : "Completare"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
