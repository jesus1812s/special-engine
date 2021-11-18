import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=47c89e774e4c9b2e2f1c1e3947e16cb2';

//GET popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${API_URL}/movie/popular?${API_KEY}`);
  //This console log has been added to check the response from the API
  // console.log(JSON.stringify(resp.data.results[0], null, 2));
  return resp.data.results;
};

//GET upcoming movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${API_URL}/movie/upcoming?${API_KEY}`);
  //This console log has been added to check the response from the API
  // console.log(JSON.stringify(resp.data.results[0], null, 2));
  return resp.data.results;
};

//GET popular TV shows
export const getPopularTvSeries = async () => {
  const resp = await axios.get(`${API_URL}/tv/popular?${API_KEY}`);
  //This console log has been added to check the response from the API
  // console.log(JSON.stringify(resp.data.results[0], null, 2));
  return resp.data.results;
};
