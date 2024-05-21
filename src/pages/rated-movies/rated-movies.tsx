import { useEffect, useState } from 'react';
import { Title } from '@mantine/core';
import { getFilmInformation } from '@/ulits/api';
import MovieList from '@/components/movie-list/movie-list';
import { IMovie } from '@/types/movie';
import NoRatedMovies from '@/components/no-rated/no-rated';
import NameInput from '@/components/name-input/name-input';
import { RatedFormProvider, useRatedForm } from './rated-form-context';

const RatedMovies = () => {
  const [ratedMoviesId, setRatedMoviesId] = useState<string[]>([]);
  const [ratedMovies, setRatedMovies] = useState<IMovie[]>([]);

  const form = useRatedForm({ 
    initialValues: {
      name: null
    }
  });

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

  const handleSubmit = (values: typeof form.values) => {
    setRatedMovies((ratedMovies) => ratedMovies.filter(film => film.original_title.toLowerCase() == values.name))
  };


  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <RatedFormProvider form={form}>
        <form onSubmit={form.onSubmit(handleSubmit)} style={{display: 'flex', justifyContent: 'space-between'}}>
          <Title>Rated Movies</Title>
          <NameInput />
        </form>
      </RatedFormProvider>
        {ratedMovies.length !== 0 ?
          <MovieList films={ratedMovies} />
          : <NoRatedMovies />
        }
    </div>
  );
};

export default RatedMovies;