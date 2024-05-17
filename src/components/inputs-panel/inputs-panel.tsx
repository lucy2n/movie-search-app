import { Button } from '@mantine/core';
import style from './inputs-panel.module.css'
import GenresInput from '../genres-input/genres-input';
import YearInput from '../year-input/year-input';
import RaitingInput from '../raiting-input/raiting-input';

export function InputsPanel() {
  return (
    <form className={style.panel}>
            <GenresInput />
            <YearInput />
            <RaitingInput />
        <Button variant="transparent" color="gray">Reset filters</Button>
    </form>
    )
}