interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number; // con il ? gli dico che è opzionale quindi accetta anche undefined
};

interface TodoWithMetadata extends Todo {
  metadata: string | object;
}

type TodoInfo = Todo & TodoWithMetadata;

interface User {
  id: number;
  name: string;
  email: string;
};

export type { TodoInfo, User };
