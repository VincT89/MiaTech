import { Todo } from './types';

const todos: Todo[] = [];

// Funzione per aggiungere un todo
function addTodo(title: string): void {
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    completed: false,
  };
  todos.push(newTodo);
}



