interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number; // con il ? gli dico che è opzionale quindi accetta anche undefined
  metadata: any; // con any accetto qualsiasi tipo di dato
};

interface User {
  id: number;
  name: string;
  email: string;
};

export type { Todo, User };