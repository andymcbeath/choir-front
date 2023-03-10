import  Home  from "./pages/Home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Musics } from "./pages/Scores"
import { createContext, useState } from "react";
import  FileForm  from "./components/FileForm"
import LatestImage from "./components/LatestImage"


export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext);
  return (
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
      <div className="App">
        <FileForm />
        <LatestImage />
        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home /> } />
          <Route path="/Scores" element={<Musics /> } />
        </Routes>
      </BrowserRouter> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;