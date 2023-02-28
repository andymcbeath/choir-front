import  Home  from "./pages/Home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;