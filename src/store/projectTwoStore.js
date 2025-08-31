import { create } from 'zustand';

export const useStore = create(set => ({
  todos: [],
  addTodo: (todo) => set(state => ({ todos: [...state.todos, todo] }))
}));
