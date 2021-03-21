import axios from "axios";

const KEY = "AIzaSyCXC0CSbREKKGS1ulG8m7dVIWNTWIo5MC0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
