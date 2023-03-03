import { MusicsIndex } from "../components/MusicsIndex";
import axios from "axios";
import { useState, useEffect} from "react";
import { MusicsNew } from "../components/MusicsNew"
import { Modal } from "../Modal"
import { MusicsShow } from "../components/MusicsShow"

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
            axios.patch(`http://localhost:3000/musics/${id}.json`, params).then((response) => {
              setPhotos(
                photos.map((music) => {
                  if (music.id === response.data.id) {
                    return response.data;
                  } else {
                    return music;
                  }
                })
              );
              successCallback();
              handleClose();
            });
          };
            
      const handleClose = () => {
        console.log("handleClose");
        setIsMusicsShowVisible(false);
      };

      useEffect(handleIndexMusics, []);
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <MusicsNew />
      <MusicsIndex musics={musics} onShowMusic={handleShowMusic} />
      <MusicsIndex onCreateMusic={handleCreateMusic} />
      <Modal show={isMusicsShowVisible} onClose={handleClose}>
      <MusicsShow photo={currentMusic} onUpdateMusic={handleUpdateMusic} />
      </Modal>
    </div>
  )
}