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
  },
});

export const { setTodos } = todoSlice.actions;

export default todoSlice.reducer;
