import { useEffect, useState } from 'react';
import { Title } from '@mantine/core';
import { getFilmInformation } from '@/ulits/api';
import MovieList from '@/components/movie-list/movie-list';
import { IMovie } from '@/types/movie';
import NoRatedMovies from '@/components/no-rated/no-rated';

const RatedMovies = () => {
  const [ratedMoviesId, setRatedMoviesId] = useState<string[]>([]);
  const [ratedMovies, setRatedMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const movies = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('movie-rating-')) {
        const movieId = key.replace('movie-rating-', '');
        movies.push(movieId);
      }
    }
    setRatedMoviesId(movies);
  }, []);

  useEffect(() => {
    ratedMoviesId.forEach(id => {
      getFilmInformation(id)
      .then(res => {
        setRatedMovies((ratedMovies) => [...ratedMovies, res])
      })
    })
  }, [ratedMoviesId])

  console.log(ratedMovies)


  return (
    <div>
        {ratedMovies.length !== 0 ?
          <>
          <Title>Rated Movies</Title>
          <MovieList films={ratedMovies} />
          </>
          : <NoRatedMovies />
        }
    </div>
  );
};

export default RatedMovies;