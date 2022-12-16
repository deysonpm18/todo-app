/**
 * 
 * @param {string} ElementId 
 */





export const App = (elementId) => {
  // cuando la funcion app( ) se llame

  (()=>{



    const app = document.createElement("div");
    app.innerHTML= '<h1>hola mundo </h1>';
    document.querySelector(elementId).append( app);

    









  })();
  
};
