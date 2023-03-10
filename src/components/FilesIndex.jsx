import React, { useEffect, useState } from "react";

export default function FilesIndex() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setFiles(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Scores</h1>
      {files.map((file) => (
        <div key={file.id}>
          <h2>{file.title}</h2>
          <p>Composer: {file.composer}</p>
          {file.image_url && <img src={URL.createObjectURL(file.image_url)} alt={file.title} />}
        </div>
      ))}
    </div>
  );
}
