// cambio nome file Utente.ts per conflitto in index.ts per duplicazione nome User


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class Utente {
  id: number;
  name: string;
  email: string | undefined;
  todos: Todo[];

  constructor(id: number, name: string, email?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.todos = [];
  }

  // Metodo per aggiungere un todo all'utente
  addTodo(newTodo: Todo): void {
    this.todos.push(newTodo);
  }
};

export { Utente, Todo };