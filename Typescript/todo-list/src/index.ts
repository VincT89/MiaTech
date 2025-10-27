import { Todo } from './types';

const todos: Todo[] = [];

// Funzione per aggiungere un todo
const addTodo = (title: string): void => {
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    completed: false,
  };
  todos.push(newTodo);
};

// Funzione per assegnare un todo a un utente
const assignTodoToUser = (todoId: number, userId: number): void => {
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    todo.userId = userId;
  }else {
    console.log(`Todo con id ${todoId} non trovato.`);
  }
};

// Funzione per ottenere i todo di un utente
const getUserTodos = (userId: number): Todo[] => {
  return todos.filter(t => t.userId === userId);
};

// Funzione per gestire errori con never
const throwError = (value: string): never => {
  throw new Error(`Not valid value: ${value}`);
};