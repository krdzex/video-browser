import React, { useState } from "react";
import "./App.css"
import axios from "axios"
import SearchBar from "./Components/SearchBar";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";

const App = () => {

  const baseURL = "https://www.googleapis.com/youtube/v3/search";
  const KEY = "AIzaSyASx5n9sWfEcwc1wNoYc0Wcy0MWmu91_p8";

  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState();
  const [selectedVideo2, setSelectedVideo2] = useState();
  const handleVideoSelect = (video) => {
    console.log(video)
    setSelectedVideo(video);
    axios.get("https://www.googleapis.com/youtube/v3/videos", {
      params: {
        part: "contentDetails",
        key: KEY,
        id: video.id.videoId
      }
    }).then(response => setSelectedVideo2(response.data.items[0])).catch()
  }
  const getInputValue = (input) => {
    axios.get(baseURL, {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: input
      }
    }).then(response => setVideos(response.data.items)).catch(reason => console.log(reason))
  }

  return (
    <div>
      <SearchBar getInputValue={getInputValue} />
      <VideoDetail selectedVideo={selectedVideo} selectedVideo2={selectedVideo2} />
      <VideoList videos={videos} handleVideoSelect={handleVideoSelect} />
    </div>
  );
}


export default App;