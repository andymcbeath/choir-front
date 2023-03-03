import  Home  from "./pages/Home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Musics } from "./pages/Scores"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home /> } />
          <Route path="/Scores" element={<Musics /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;