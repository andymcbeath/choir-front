import axios from "axios";
import { useState, useEffect } from "react";
import { MusicsIndex } from "./MusicsIndex";
import { MusicsNew } from "./MusicsNew";

export function Home() {
  const [musics, setMusics] = useState([]);

  const handleIndexMusics = () => {
    console.log("handleIndexMusics");
    axios.get("http://localhost:3000/musics.json").then((response) => {
      console.log(response.data);
      setMusics(response.data);
    });
  };

  useEffect(handleIndexMusics, []);

  return (
    <div>
      <MusicsNew />
      <MusicsIndex musics={musics}} />
    </div>
  );
}