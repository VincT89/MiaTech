// Funzione generica per filtrare todo
const filterTodos = <T extends { completed: boolean }>( 
  todos: T[],
  completed: boolean
): T[] => {
  return todos.filter((todo) => todo.completed === completed);
};

export { filterTodos };