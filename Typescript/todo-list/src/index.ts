import { Project, TodoInfo, User } from "./types";

import { Utente, Todo } from "./Utente";

const todos: TodoInfo[] = [];

// Funzione per aggiungere un todo
const addTodo = (title: string): void => {
	const newTodo: TodoInfo = {
		id: todos.length + 1,
		title,
		completed: false,
    metadata: {},
    status: 0,
	};
	todos.push(newTodo);
};

addTodo("Imparare TypeScript");
addTodo("Costruire una todo list");

// Funzione per assegnare un todo a un utente
const assignTodoToUser = (todoId: number, userId: number): void => {
	const todo = todos.find((t) => t.id === todoId);
	if (todo) {
		todo.userId = userId;
	} else {
		console.log(`Todo con id ${todoId} non trovato.`);
	}
};

assignTodoToUser(1, 101);
assignTodoToUser(2, 102);

// Funzione per ottenere i todo di un utente
const getUserTodos = (userId: number): TodoInfo[] => {
	return todos.filter((t) => t.userId === userId);
};

console.log("Todo per utente 101:", getUserTodos(101));
console.log("Todo per utente 102:", getUserTodos(102));

// Funzione per gestire errori con never
const throwError = (value: string): never => {
	throw new Error(`Not valid value: ${value}`);
};

// Funzione per gestire tipi dinamici con Unknown
const parseInput = (input: unknown): string => {
	if (typeof input === "string") {
		return input;
	} else if (typeof input === "number") {
		return input.toString();
	} else {
		return throwError("Input deve essere stringa o numero");
	}
};

console.log("Parsed input:", parseInput(12345));

// Funzione che aggiorna parziamente un todo
const updateTodo = (todoId: number, updates: Partial<TodoInfo>): void => {
	const todo = todos.find((t) => t.id === todoId);
	if (todo) {
		Object.assign(todo, updates); // invece di aggiornare manualmente ogni campo, con Object.assign copia le proprietà da updates a todo
	} else {
		console.log(`Todo con id ${todoId} non trovato.`);
	}
};

updateTodo(1, { completed: true, title: "Imparare TypeScript Avanzato" });
console.log(
	"Todo aggiornato:",
	todos.find((t) => t.id === 1)
);

// Funzione tuple che restituisce titolo e stato di un todo
const getTodoSummary = (todoId: number): [string, boolean] | null => {
	const todo = todos.find((t) => t.id === todoId);
	if (todo) {
		return [todo.title, todo.completed];
	}
	return null;
};

console.log("Riepilogo Todo 1:", getTodoSummary(1));

// Funzione che crea un Project con utenti e todo
const createProject = (
	id: number,
	name: string,
	users: User[],
	todos: TodoInfo[]
): Project => {
	return {
		id,
		name,
		users,
		todos,
	};
};

const usersProject: User[] = [
	{
		id: 101,
		name: "Alice",
		email: "alice@example.com",
		todos: [
			{
				id: 1,
				title: "Imparare TypeScript Avanzato",
				completed: true,
				metadata: {},
        userId: 101,
        status: 1,
			},
		],
	},
];

const todosProject = [
  {
    id: 1,
    title: "Imparare TypeScript Avanzato",
    completed: false,
    metadata: {},
    userId: 101,
    status: 1,
  }
];

const project = createProject(1, "Progetto test", usersProject, todosProject);
console.log("Progetto creato:", project);

// Funzione per aggiornare lo stato di un todo
const updateTodoStatus = (todoId: number, status: number): void => {
  const todo = todos.find((t) => t.id === todoId);
  if (todo) {
    todo.status = status;
  } else {
    console.log(`Todo con id ${todoId} non trovato.`);
  }
};

updateTodoStatus(1, 2);
console.log("Todo con stato aggiornato:", todos.find((t) => t.id === 1));

// Creazione utenti
const utente1 = new Utente(1, "Mario Rossi", "mario.rossi@gmail.it");
const utente2 = new Utente(2, "Luigi Bianchi");

// Creazione todo
const todo1: Todo = { id: 1, title: "Fare la spesa", completed: false };
const todo2: Todo = { id: 2, title: "Pulire la casa", completed: true };

// Aggiunta todo agli utenti
utente1.addTodo(todo1);
utente2.addTodo(todo2);

console.log("Utente 1:", utente1);
console.log("Utente 2:", utente2);

// Utilizzo della funzione generica di filtro
import { filterTodos } from "./utils";

const completedTodos = filterTodos(todos, true);
console.log("Todo completati:", completedTodos);

// updatePartialTodo 
const updatePartialTodo = (todoId: number, updates: Partial<TodoInfo>): void => {
	const todo = todos.find((t) => t.id === todoId);
	if (todo) {
		console.log("Todo con id", todoId, "prima dell'aggiornamento:", todo);
		Object.assign(todo, updates);
		console.log("Todo con id", todoId, "dopo l'aggiornamento:", todo);
	} else {
		console.log(`Todo con id ${todoId} non trovato.`);
	}
};
updatePartialTodo(2, { title: "Fare la spesa e cucinare", completed: false });
