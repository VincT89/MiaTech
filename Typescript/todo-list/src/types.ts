interface Todo {
  id: number;
  title: string;
  completed: boolean;
};

interface User {
  id: number;
  name: string;
  email: string;
};

export type { Todo, User };