import React from "react";
import "./VideoItem.css";
//Destructuring the props
export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="ui relaxed divided list border-bottom"
    >
      <div className="video-item item ">
        <img
          className="ui image "
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content ">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
}

//className="img-thumbnail"
