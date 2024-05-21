import { Button } from '@mantine/core';
import style from './inputs-panel.module.css'
import GenresInput from '../genres-input/genres-input';
import YearInput from '../year-input/year-input';
import RaitingInput from '../raiting-input/raiting-input';
import SortBy from '../sort-by/sort-by';
import { FiltersFormProvider, useFiltersForm } from './form-context';
import { useEffect } from 'react';
import { MovieFilters } from '@/ulits/api';

export function InputsPanel({fetchMovies}) {

  const form = useFiltersForm({
    initialValues: {
      genres: null,
      year: null,
      raitingBottom: null,
      raitingTop: null,
      sortType: null
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
    fetchMovies(filters)
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