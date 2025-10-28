import { TodoInfo } from './types';

const todos: TodoInfo[] = [];

// Funzione per aggiungere un todo
const addTodo = (title: string): void => {
  const newTodo: TodoInfo = {
    id: todos.length + 1,
    title,
    completed: false,
    metadata: {},
  };
  todos.push(newTodo);
};

addTodo('Imparare TypeScript');
addTodo('Costruire una todo list');


// Funzione per assegnare un todo a un utente
const assignTodoToUser = (todoId: number, userId: number): void => {
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    todo.userId = userId;
  }else {
    console.log(`Todo con id ${todoId} non trovato.`);
  }
};

assignTodoToUser(1, 101);
assignTodoToUser(2, 102);



// Funzione per ottenere i todo di un utente
const getUserTodos = (userId: number): TodoInfo[] => {
  return todos.filter(t => t.userId === userId);
};

console.log('Todo per utente 101:', getUserTodos(101));
console.log('Todo per utente 102:', getUserTodos(102));


// Funzione per gestire errori con never
const throwError = (value: string): never => {
  throw new Error(`Not valid value: ${value}`);
};



// Funzione per gestire tipi dinamici con Unknown
const parseInput = (input: unknown): string => {
  if (typeof input === 'string') {
    return input;
  } else if (typeof input === 'number') {
    return input.toString();
  } else {
    return throwError('Input deve essere stringa o numero');
  } 
};

console.log('Parsed input:', parseInput(12345)); 

// Funzione che aggiorna parziamente un todo
const updateTodo = (todoId: number, updates: Partial<TodoInfo>): void => {
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    Object.assign(todo, updates); // invece di aggiornare manualmente ogni campo, con Object.assign copia le proprietà da updates a todo
  } else {
    console.log(`Todo con id ${todoId} non trovato.`);
  }
};

updateTodo(1, { completed: true, title: 'Imparare TypeScript Avanzato' });
console.log('Todo aggiornato:', todos.find(t => t.id === 1));

// Funzione tuple che restituisce titolo e stato di un todo
const getTodoSummary = (todoId: number): [string, boolean] | null => {
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    return [todo.title, todo.completed];
  }
  return null;
};

console.log('Riepilogo Todo 1:', getTodoSummary(1));