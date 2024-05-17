import { Select, Button, MultiSelect } from '@mantine/core';
import style from './inputs-panel.module.css'
import GenresInput from '../genres-input/genres-input';

export function InputsPanel() {
  return (
    <form className={style.panel}>
            <GenresInput />
            <MultiSelect
                radius='md'
                className={style.input}
                label="Release year"
                placeholder='Select release year'
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />

            <div className={style.selects}>
            <Select
                radius='md'
                className={`${style.input} ${style.input_type_raiting}`}
                label="Raiting"
                placeholder="Form"
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />
            <Select
                radius='md'
                className={`${style.input} ${style.input_type_raiting}`}
                placeholder="To"
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />
            </div>
        <Button variant="transparent" color="gray">Reset filters</Button>
    </form>
    )
}