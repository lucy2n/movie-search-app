import { Button } from '@mantine/core';
import style from './inputs-panel.module.css'
import { YearInput } from '../year-input/year-input';
import { RatingInput } from '../rating-input/rating-input';
import { SortBy } from '../sort-by/sort-by';
import { FiltersFormProvider, useFiltersForm } from './form-context';
import { useEffect } from 'react';
import { GenresInput } from '../genres-input/genres-input';
import { MovieFilters } from '@/types/movie';

export const InputsPanel = ({ fetchMovies }: { fetchMovies: (filters: MovieFilters) => void }): JSX.Element => {

  const form = useFiltersForm({
    initialValues: {
      genres: [],
      year: '',
      raitingBottom: '',
      raitingTop: '',
      sortType: ''
    }
  });

  useEffect(() => {
    applyFilters()
  }, [form.values])

  const applyFilters = () => {
    const filters: MovieFilters = {
      genres: form.values.genres,
      year: form.values.year,
      ratingFrom: form.values.raitingBottom,
      ratingTo: form.values.raitingTop,
      sortType: form.values.sortType
    }
    fetchMovies(filters);
  }

  const resetForm = () => {
    form.reset()
  }

  return (
    <FiltersFormProvider form={form}>
      <form className={style.panel}>
          <GenresInput/>
          <YearInput/>
          <RatingInput/>
          <Button variant="transparent" color="gray" onClick={() => { resetForm() }}>Reset filters</Button>
          <SortBy/>
      </form>
    </FiltersFormProvider>
    )
}