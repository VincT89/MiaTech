import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
// import useFilteredTodos from "../hooks/useFilteredTodos";

function TodoList() {
	const { data, loading, error } = useFetch(
		"https://jsonplaceholder.typicode.com/todos"
	);
  const [inputRicerca, setInputRicerca] = useState("");
  
  const handleInputChange = useCallback((e) => {
    setInputRicerca(e.target.value);
  }, []);

	const todosFiltrati = useMemo(() => {
		if (!data) {
			return [];
		}
		const terminiRicerca = inputRicerca.toLowerCase();
		return data.filter((todo) =>
			todo.title.toLowerCase().includes(terminiRicerca)
		);
	}, [data, inputRicerca]);

	if (loading) {
		return <p>Caricamento....</p>;
	}

	if (error) {
		return <p>Errore: {error}</p>;
	}

	return (
		<div className="mt-30 w-full border p-6 rounded-lg ">
			<h2 className="text-2xl font-bold mb-4 mt-">Lista To-Do</h2>
			<input
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
							<strong>{todo.title}</strong> 
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
export default TodoList;
