import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: "abc" , task: "demo-task" , isDone: false}],
  };

  export const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
          state.todos  = state.todos.filter((todo) => todo.id !== action.payload)
        },
        marksAsdone: (state, action) => {
            state.todos.map((todo) => {
                if(todo.id === action.payload ) {
                    todo.isDone = true;
                }
            });

        },

    },
  });
  export const { addTodo, deleteTodo, marksAsdone} = todoReducer.actions;
  export default todoReducer.reducer;