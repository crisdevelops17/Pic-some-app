
import React from "react";
import {Routes,Route} from "react-router-dom"
import Header from "./Components/Header"
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

 
function App() {
  return (
    <div>
      <Header />
    <Routes>
        <Route exact path = "/" element={<Photos />}/>
        <Route path = "/cart" element={<Cart />}/>
    </Routes>
    </div>
  );
}

export default App;
