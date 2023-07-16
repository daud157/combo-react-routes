 import React from "react";

 import TodoApp from "./todo";
 import Nnav from "./nnav";

 import  CurrencyConverter from "./currency"
 
 import { Routes,Route } from "react-router-dom";


function App() {
  return (
     <div>
      {/* <Nnav /> */}
      <Routes>
                <Route exact path='/' element={< Nnav/ >}></Route>
                 <Route exact path='/todo' element={< TodoApp />}></Route>
                 <Route exact path='/Currency' element={<CurrencyConverter />}></Route>
      </Routes>
       
     </div>
  
  );                                 
}

export default App