import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { getPopularMovies } from './services/services';

const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then((data) => setMovie(data))
      .catch((err) => setError(err));
  }, []);

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
      {error && <Text style={{ color: 'red' }}>Error in the server</Text>}
    </View>
  );
};
export default App;
