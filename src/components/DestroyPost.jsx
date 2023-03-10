import React, { useState } from "react";
import axios from "axios";

export default function DestroyPost() {
  const [response, setResponse] = useState(null);

  const handleDestroyPost = (post) => {
    console.log("handleDestroyPost", post);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`)
      .then((response) => {
        console.log("Response from server:", response);
        setResponse(response);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        setResponse(error.response);
      });
  };

  return (
    <div>
      <button onClick={() => handleDestroyPost({ id: 123 })}>Delete Post</button>
      {response && (
        <div>
          <p>Status: {response.status}</p>
          <p>Message: {response.statusText}</p>
        </div>
      )}
    </div>
  );
}
