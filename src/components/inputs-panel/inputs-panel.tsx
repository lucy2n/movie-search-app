import { Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import style from './inputs-panel.module.css'
import GenresInput from '../genres-input/genres-input';
import YearInput from '../year-input/year-input';
import RaitingInput from '../raiting-input/raiting-input';
import SortBy from '../sort-by/sort-by';

export function InputsPanel() {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      genres: [],
      year: '',
      rating: {
        raitingBottom: '',
        raitingTop: '',
      },
      sortType: ''

    }
  });

  return (
    <form className={style.panel}>
            <GenresInput 
              key={form.key('genres')}
              {...form.getInputProps('genres')}
            />
            <YearInput 
              key={form.key('year')}
              {...form.getInputProps('year')}
            />
            <RaitingInput
              key={form.key('rating')}
              {...form.getInputProps('rating')}
            />
        <Button variant="transparent" color="gray">Reset filters</Button>
        <SortBy 
           key={form.key('sortType')}
           {...form.getInputProps('sortType')}
        />
    </form>
    )
}