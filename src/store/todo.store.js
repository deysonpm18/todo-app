import { Todo } from "../todo/model/todos";





export const Filters = {
  All: "all",
  Completed: "completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("piedra del infinito "),
    new Todo("piedra del alam "),
    new Todo("piedra del tiempo  "),
    new Todo("Piedra de la realidad"),
  ],

  filter: Filters.All,
};

const initStore = () => { 
  loadStore();
  console.log('initstorere')
  
};

const loadStore = () => {
  if (!localStorage.getItem('satete') )
  return
};

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case filter.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

      default:
        throw new Error (`option ${filter}in not valid `)

   
  }
};
const addTodo = (description) => {
  if (!description) throw new Error("no description");

  state.todos.push(new Todo(description));
};

const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) todo.done = !todo.done;

    return todo;
  });
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompled = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
};

const getCurretFilter = () => {
  return state.filter;
};

export default {
  initStore,
  getCurretFilter,
  setFilter,
  deleteTodo,
  toggleTodo,
  addTodo,
  loadStore,
  getTodos,
  deleteCompled,
  
  
};
