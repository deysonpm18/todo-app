import { Todo } from "../todo/model/todos";
const Filter = {
  ALL: "all",
  Completed: "completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("piedra del infinito "),
    new Todo("piedra del alam "),
    new Todo("piedra del tiempo  "),
  ],

  Filter: Filter.ALL,
};

const initStore = () => {
  console.log(state);

  console.log("inisotre ");
};

const loadStore = () => {
  throw new Error("not implemeted");
};

const getTodos = (filter = Filter.ALL) => {
  switch (Filter) {
    case Filter.ALL:
      return [...state.todos];
    case Filter.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filter.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`option ${filter} is not valid `);
  }
};
const addTodo = (todo) => {
  throw new Error("not implemeted");
};

const toggleTodo = (todoid) => {
  throw new Error("not implemeted");
};

const deleteTodo = (todoid) => {
  throw new Error("not implemeted");
};

const setFilter = (newFilter = Filter.ALL) => {
  throw new Error("not implemeted");
};

const getCurretFilter = () => {
  throw new Error("not implemeted");
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
};
