import React from "react";

function LatestImage(props) {
  const latestPost = props.latestPost;

  if (latestPost instanceof File && latestPost.type.startsWith("image/")) {
    return (
      <div>
        <h2>Latest Image:</h2>
        <img src={URL.createObjectURL(latestPost)} alt="Latest post" />
      </div>
    );
  } else if (typeof latestPost === "string" && latestPost.endsWith(".pdf")) {
    return (
      <div>
        <h2>Latest PDF:</h2>
        <embed src={latestPost} width="500" height="500" />
      </div>
    );
  } else {
    return null; // If the latest post is not a string, image, or PDF, don't render anything
  }
}

export default LatestImage;

