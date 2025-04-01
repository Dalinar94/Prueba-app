import React from'react';

//El createContext crea un objeto como valor inicial para el contexto
const Context = React.createContext({
    name:'Miguel',
    haciendoPracticas: true
})

export default Context;