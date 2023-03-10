import { AppContext } from "../App";
import React, { useContext } from "react";
import { useState } from "react";

export default function FileForm() {
  const { latestPost, setLatestPost } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  
  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
    setError(false); // Reset error status when selecting a new file
  };

  function submitToAPI(data) {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data.image_url);
      })
      .catch((error) => console.error(error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append("post[title]", event.target.title.value);
    data.append("post[composer]", event.target.composer.value);
    data.append("post[image]", event.target.image.files[0]);
    submitToAPI(data);
  }

  return (
    <div>
      <div>File Form</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="composer">Composer</label>
        <input type="text" name="composer" id="composer" />
        <br />
        <label htmlFor="image">File</label>
        <input type="file" name="image" id="image" onChange={handleFileSelect}/>
        {file && file.name.endsWith(".pdf") && (
          <>
            {error ? (
              <p>Failed to load PDF file.</p>
            ) : (
              <>
                <h3>PDF File:</h3>
                <embed src={URL.createObjectURL(file)} />
              </>
            )}
          </>
        )}
        <br />
        <button type="submit">Create File</button>
      </form>
    </div>
  );
}
