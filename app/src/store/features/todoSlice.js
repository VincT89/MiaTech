import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  todos: [], // Array di to-do
};

// Crea lo slice dei to-do
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = todoSlice.actions;

export default todoSlice.reducer;
