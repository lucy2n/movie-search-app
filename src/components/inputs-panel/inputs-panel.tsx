import { Button } from '@mantine/core';
import style from './inputs-panel.module.css'
import { YearInput } from '../year-input/year-input';
import { RaitingInput } from '../raiting-input/raiting-input';
import { SortBy } from '../sort-by/sort-by';
import { FiltersFormProvider, useFiltersForm } from './form-context';
import { useEffect } from 'react';
import { MovieFilters } from '@/utils/api';
import { GenresInput } from '../genres-input/genres-input';

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

  return (
    <FiltersFormProvider form={form}>
      <form className={style.panel}>
          <GenresInput/>
          <YearInput/>
          <RaitingInput
            key={form.key('rating')}
            {...form.getInputProps('rating')}
          />
          <Button variant="transparent" color="gray" onClick={() => { form.reset() }}>Reset filters</Button>
          <SortBy/>
      </form>
    </FiltersFormProvider>
    )
}