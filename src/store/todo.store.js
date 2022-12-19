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

const deleteTodo = (todoid) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoid);
};

const deleteCompled = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};
const setFilter = (newFilter = Filter.ALL) => {
  state.Filter = newFilter;
};

const getCurretFilter = () => {
  return state.Filter;
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
