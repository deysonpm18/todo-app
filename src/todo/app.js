import todoStore from "../store/todo.store";
import html from "./app.html?raw";


/**
 *
 *
 * @param {string} ElementId
 */

export const App = (elementId) => {
  // cuando la funcion app( ) se llame
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurretFilter());
    console.log(todos)
     
  };

  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();
};
