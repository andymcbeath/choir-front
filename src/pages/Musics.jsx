import axios from "axios";
import { useState, useEffect } from "react";
import { MusicsIndex } from "../components/MusicsIndex";
import { MusicsNew } from "../components/MusicsNew";

export default function Home() {
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
      <MusicsIndex musics={musics} />
    </div>
  );
}