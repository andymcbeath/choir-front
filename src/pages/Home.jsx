import { MusicsIndex } from "../components/MusicsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { MusicsNew } from "../components/MusicsNew";
import { Modal } from "../Modal";
import { MusicsShow } from "../components/MusicsShow";


export default function Home() {
  const [musics, setMusics] = useState([]);
  const [isMusicsShowVisible, setIsMusicsShowVisible] = useState(false);
  const [currentMusic, setCurrentMusic] = useState({});

  const handleIndexMusics = () => {
    console.log("handleIndexMusics");
    axios.get("http://localhost:3000/musics.json").then((response) => {
      console.log(response.data);
      setMusics(response.data);
    });
  };

  const handleCreateMusic = (params, successCallback) => {
    console.log("handleCreateMusic", params);
    axios.post("http://localhost:3000/musics.json", params).then((response) => {
      setMusics([...musics, response.data]);
      successCallback();
    });
  };

  const handleShowMusic = (music) => {
    console.log("handleShowMusic", music);
    setIsMusicsShowVisible(true);
    setCurrentMusic(music);
  };

  const handleUpdateMusic = (id, params, successCallback) => {
    console.log("handleUpdateMusic", params);
    axios
      .patch(`http://localhost:3000/musics/${id}.json`, params)
      .then((response) => {
        setMusics(
          musics.map((music) => {
            if (music.id === response.data.id) {
              return response.data;
            } else {
              return music;
            }
          })
        );
        successCallback();
        setIsMusicsShowVisible(false);
      });
  };

  const handleDestroyMusic = (music) => {
    console.log("handleDestroyMusic", music);
    axios
      .delete(`http://localhost:3000/musics/${music.id}.json`)
      .then((response) => {
        setMusics(musics.filter((p) => p.id !== music.id));
        setIsMusicsShowVisible(false);
      });
  };

  useEffect(handleIndexMusics, []);

  const handleClose = () => {
    setIsMusicsShowVisible(false);
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <MusicsNew onCreateMusic={handleCreateMusic} />
      <MusicsIndex musics={musics} onShowMusic={handleShowMusic} />
      <Modal show={isMusicsShowVisible} onClose={handleClose}>
        <MusicsShow
          music={currentMusic}
          onUpdateMusic={handleUpdateMusic}
          onDestroyMusic={handleDestroyMusic}
        />
      </Modal>
    </div>
  );
}
