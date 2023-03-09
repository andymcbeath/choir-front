import { AppContext } from "../App";
import React, { useContext } from "react";

export default function FileForm() {
  const { latestPost, setLatestPost } = useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append("post[title]", event.target.title.value);
    data.append("post[composer]", event.target.composer.value);
    data.append("post[image]", event.target.image.files[0]);
    submitToAPI(data);
  }

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
        <input type="file" name="image" id="image" />
        <br />
        <button type="submit">Create File</button>
      </form>
    </div>
  );
}
