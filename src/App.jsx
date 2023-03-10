import  Home  from "./pages/Home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createContext, useState } from "react";
import  FilesIndex  from "./components/FilesIndex";
import FileNew from "./components/FileNew";
import LatestPost from "./components/LatestPost";
import DestroyPost from "./components/DestroyPost";




export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext);
  return (
    <div>
    <Home />
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
      <div className="App">
        <FileNew />
        <LatestPost />
        <FilesIndex />
        <DestroyPost />
     
        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home /> } />
          <Route path="/Scores" element={<Musics /> } />
        </Routes>
      </BrowserRouter> */}
      </div>
    </AppContext.Provider>
    </div>
  );
}

export default App;