import React from "react";

export default function VideoDetail({ video }) {
  if (!video) {
    return (
      <div className="mb-3">
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          ></span>
          Exceeded your quota!
        </button>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="grid">
      <div className="ui embed mb-5">
        <iframe title={video.snippet.title} src={videoSrc}></iframe>
      </div>
      <div className="">
        <div className=" row ">
          <div className="card ">
            <div className="card-body ">
              <h4 className="card-title ">{video.snippet.title}</h4>
              <p className="card-text"> {video.snippet.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
