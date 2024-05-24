import { useEffect, useState } from 'react';
import { Pagination, Title } from '@mantine/core';
import { getFilmInformation, getGenres } from '@/utils/api';
import MovieList, { IMovieGenresDict } from '@/components/movie-list/movie-list';
import { IMovieDetailsModel, IMovieModel } from '@/types/movie';
import NoRatedMovies from '@/components/no-rated/no-rated';
import NameInput from '@/components/name-input/name-input';
import { RatedFormProvider, useRatedForm } from './rated-form-context';
import style from './rated-movies.module.css';

const RatedMovies = () => {
  const [ratedMoviesId, setRatedMoviesId] = useState<string[]>([]);
  const [ratedMovies, setRatedMovies] = useState<IMovieDetailsModel[]>([]);
  const [filter, setFilter] = useState<string>('');

  const form = useRatedForm({ 
    initialValues: {
      name: null
    }
  });

  useEffect(() => {
    const movies = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('movie-rating-')) {
        const movieId = key.replace('movie-rating-', '');
        movies.push(movieId);
      }
    }
    setRatedMoviesId(movies);
  }, []);

  useEffect(() => {
    fetchRatedMovies()
  }, [ratedMoviesId])

  const fetchRatedMovies = () => {
    setRatedMovies([])
    ratedMoviesId.forEach(id => {
      getFilmInformation(id)
      .then(res => {
        setRatedMovies((ratedMovies) => [...ratedMovies, res])
      })
    })
  }

  const setupupGenresDict = (films: IMovieDetailsModel[]): IMovieGenresDict => {
      let dict: IMovieGenresDict = {};
      films.forEach((film) => {
        dict[film.id] = film.genres.map((g) => g.name);
      });
      return dict
  }

  const handleSubmit = (values: typeof form.values) => {
    setFilter(values.name ?? '')
  };

  const filteredRatedMovies = (): IMovieDetailsModel[] => {
    return ratedMovies.filter((film) => filter !== '' || filter !== null ? film.original_title.toLowerCase().includes(filter.toLowerCase()) : true)
  }

  return (
    <div className={style.main}>
        {(Array.isArray(ratedMovies) && ratedMovies.length) ? (
          <>
            <RatedFormProvider form={form}>
              <form onSubmit={form.onSubmit(handleSubmit)} className={style.form}>
                <Title>Rated Movies</Title>
                <NameInput />
              </form>
            </RatedFormProvider>
            <MovieList films={filteredRatedMovies()} genresDict={setupupGenresDict(filteredRatedMovies())}/>
          </>
        )
          : 
          <NoRatedMovies />
        }
        <Pagination
                className={style.pagination}
                total={3}
                // total={Math.min(3, pageNumber ?? 3)}
            />
    </div>
  );
};

export default RatedMovies;