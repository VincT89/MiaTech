import React, { useEffect, useMemo, useRef } from "react";
import useFetch from "../hooks/useFetch";
import { useTodos } from "../context/useTodos";
import { Link, useSearchParams } from "react-router-dom";

function TodoList() {
  const { todos, setTodos } = useTodos();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef(null);

  // legge il termine di ricerca dalla query
  const inputRicerca = searchParams.get("q") || "";

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (data) setTodos(data);
  }, [data, setTodos]);

  // aggiorna i parametri della query quando l'input cambia
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { q: value } : {});
  };

  const todosFiltrati = useMemo(() => {
    if (!todos) return [];
    const terminiRicerca = inputRicerca.toLowerCase();
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(terminiRicerca)
    );
  }, [todos, inputRicerca]);

  if (loading) return <p>Caricamento....</p>;
  if (error) return <p>Errore: {error.message}</p>;

  return (
    <div className="mt-30 w-full border p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Lista To-Do</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Cerca TO-DO....."
        value={inputRicerca}
        onChange={handleInputChange}
        className="border rounded-2xl p-2 mb-4 w-full"
      />
      <div className="h-80 w-200 overflow-y-auto">
        <ul>
          {todosFiltrati.map((todo) => (
            <li key={todo.id}>
              <Link
                to={`/todo/${todo.id}`}
                className="text-blue-500 hover:underline"
              >
                <strong>{todo.title}</strong>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
