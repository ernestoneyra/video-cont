import React, { useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from './components/Hooks/useVideos';

if (module.hot) {
  module.hot.accept();
}

export default function App() {
  
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('anime');

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  //setSelectedVideo(response.data.items[0]);


  return (
    <div className="container col-lg-8 col-md-10">
      <SearchBar onFormSubmit={search} />
      <div className="grid col-md-11">
        <div className="row">
          <div className="col-8">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="col-4">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
  
}

