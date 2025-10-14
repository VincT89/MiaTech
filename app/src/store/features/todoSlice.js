// store/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Stato iniziale
const initialState = {
  todos: [], // Array di to-do
};

// Crea lo slice dei to-do
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Imposta i to-do (per esempio, da un'API)
    setTodos: (state, action) => {
      state.todos = action.payload;
    },

    // Azione per segnare un to-do come completato
    toggleComplete: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { setTodos, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
