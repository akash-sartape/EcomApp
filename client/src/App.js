
import React from 'react';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import{BrowserRouter,Route, Routes} from "react-router-dom"

function App() {
 
 
  return (

 <div className="App">
  
 <h1>Ecommerse App</h1>
 <BrowserRouter>
 <Routes>
  <Route path="/Signup"  element={<Signup></Signup>}></Route>
  <Route path="/login"  element={<Login></Login>}></Route>
 
 </Routes>
 </BrowserRouter>

   
    </div>
  );
}

export default App;
