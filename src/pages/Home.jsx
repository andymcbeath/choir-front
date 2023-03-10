import  FilesIndex  from "../components/FilesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "../Modal";

import React from "react";

export default function Home() {
  const [photos, setPhotos] = useState([]);

   const handleIndexPhotos = () => {
    console.log("handleIndexPhotos");
      axios.get("http://localhost:3000/photos.json").then((response) => {
      console.log(response.data);
     setPhotos(response.data);
    });
 };

+   useEffect(handleIndexPhotos, []);


  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
}
