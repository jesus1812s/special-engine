import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
// import { SliderBox } from 'react-native-image-slider-box';
import { getPopularMovies, getUpcomingMovies } from '../services/services';

const Home = () => {
  const [moviesImages, setMoviesImages] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then((movies) => {
        const moviesImagesArray = [];
        movies.forEach((movie) => {
          moviesImagesArray.push(movie.poster_path);
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch((err) => setError(err));

    /* getPopularMovies()
    .then((movie) => )
    .catch((err) => setError(err)); */
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <SliderBox images={this.state.images} /> */}
    </View>
  );
};

export default Home;
