"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [];
// Funzione per aggiungere un todo
const addTodo = (title) => {
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false,
    };
    todos.push(newTodo);
};
addTodo('Imparare TypeScript');
addTodo('Costruire una todo list');
// Funzione per assegnare un todo a un utente
const assignTodoToUser = (todoId, userId) => {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.userId = userId;
    }
    else {
        console.log(`Todo con id ${todoId} non trovato.`);
    }
};
assignTodoToUser(1, 101);
assignTodoToUser(2, 102);
// Funzione per ottenere i todo di un utente
const getUserTodos = (userId) => {
    return todos.filter(t => t.userId === userId);
};
console.log('Todo per utente 101:', getUserTodos(101));
// Funzione per gestire errori con never
const throwError = (value) => {
    throw new Error(`Not valid value: ${value}`);
};
// Funzione per gestire tipi dinamici con Unknown
const parseInput = (input) => {
    if (typeof input === 'string') {
        return input;
    }
    else if (typeof input === 'number') {
        return input.toString();
    }
    else {
        return throwError('Input deve essere stringa o numero');
    }
};
console.log('Parsed input:', parseInput(12345));
