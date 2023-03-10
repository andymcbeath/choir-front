import React from "react";

function LatestPost(props) {
  const latestPost = props.latestPost;

  if (latestPost instanceof File && latestPost.type.startsWith("image/")) {
    return (
      <div>
        <h2>Latest Score:</h2>
        <img src={URL.createObjectURL(latestPost)} alt="Latest post" />
      </div>
    );
  } else if (typeof latestPost === "string" && latestPost.endsWith(".pdf")) {
    return (
      <div>
        <h2>Latest Score:</h2>
        <embed src={latestPost} />
      </div>
    );
  } else {
    return null; // If the latest post is not a string, image, or PDF, don't render anything
  }
}

export default LatestPost;

