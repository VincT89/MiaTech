interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number; // con il ? gli dico che è opzionale quindi accetta anche undefined
  metadata: string | object;
};

interface TodoWithMetadata extends Todo {
  metadata: string | object;
}

interface User {
  id: number;
  name: string;
  email: string;
};

export type { Todo, User, TodoWithMetadata };
