import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useTodos } from "../context/useTodos";

function TodoList() {
  const { todos, setTodos } = useTodos();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const [inputRicerca, setInputRicerca] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (data) setTodos(data);
  }, [data, setTodos]);

  const handleInputChange = useCallback((e) => {
    setInputRicerca(e.target.value);
  }, []);

  const todosFiltrati = useMemo(() => {
    if (!todos) return [];
    const terminiRicerca = inputRicerca.toLowerCase();
    return todos.filter(todo =>
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
          {todosFiltrati.map(todo => (
            <li key={todo.id}><strong>{todo.title}</strong></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
