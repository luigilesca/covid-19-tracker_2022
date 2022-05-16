// const baseURL = "https://disease.sh/v3/covid-19";

// export default baseURL;

import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

console.log('BASEURL', baseURL);

export default axios.create({
  baseURL: baseURL,
});
