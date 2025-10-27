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



// Funzione per assegnare un todo a un utente
function assignTodoToUser(todoId: number, userId: number): void {
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    todo.userId = userId;
  }else {
    console.log(`Todo con id ${todoId} non trovato.`);
  }
}