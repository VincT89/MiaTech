
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class User {
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

export { User, Todo };