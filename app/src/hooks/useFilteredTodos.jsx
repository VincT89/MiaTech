import { useState, useEffect } from "react";

function useFilteredTodos(todos, inputRicerca) {
  const [todosFiltrati, setTodosFiltrati] = useState([]);

  useEffect(() => {
    if (!todos) {
      return;
    };

    const terminiRicerca = inputRicerca.toLowerCase();
    const filtrati = todos.filter((todo) =>
      todo.title.toLowerCase().includes(terminiRicerca)
    );
    
    setTodosFiltrati(filtrati);
  }, [todos, inputRicerca]);
  
  return todosFiltrati;
}

export default useFilteredTodos;