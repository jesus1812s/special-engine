import axios from 'axios';

export const getPopularMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/550?api_key=47c89e774e4c9b2e2f1c1e3947e16cb2'
  );
  //This console log has been added to check the response from the API
  // console.log(JSON.stringify(resp.data, null, 2));
  return resp.data;
};
