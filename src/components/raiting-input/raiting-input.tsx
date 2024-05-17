import { Select } from "@mantine/core";
import style from './raiting-input.module.css'

export default function RaitingInput () {
    return (
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
    )
}