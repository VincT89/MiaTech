import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Stato iniziale
const initialState = {
  todos: [], // Array di to-do
  loading: false,
  error: null,
};

// Fetch dei to-do (spostato dallo useEffect)
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (url, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Errore nella fetch');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Crea lo slice dei to-do
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setTodos, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
