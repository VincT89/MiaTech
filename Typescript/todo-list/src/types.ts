interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number; // con il ? gli dico che è opzionale quindi accetta anche undefined
};

interface User {
  id: number;
  name: string;
  email: string;
};

export type { Todo, User };