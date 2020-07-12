import axios from 'axios';

const KEY = 'AIzaSyCD-EF3TIA0RV6Rh19I2fOwZZHjX8NAdDM'
export const API_DEFAULT_PARAMS = {
  part: 'snippet',
  type: 'video',
  maxResults: 5,
  key: KEY
}

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
