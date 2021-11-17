import React, { useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/550?api_key=47c89e774e4c9b2e2f1c1e3947e16cb2'
  );
  //This console log has been added to check the response from the API
  console.log(JSON.stringify(resp.data, null, 2));
  return resp.data;
};

const App = () => {
  const [movie, setMovie] = useState('');
  getPopularMovies().then((data) => setMovie(data));
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Movie Name: {movie.title}</Text>
      <Text>Language: {movie.original_language}</Text>
      <Text>Realease: {movie.release_date}</Text>
    </View>
  );
};
export default App;
