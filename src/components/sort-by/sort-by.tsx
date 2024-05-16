import { Select } from "@mantine/core"
import style from './sort-by.module.css';

export default function SortBy () {
    return (
        <Select
            className={style.input}
            label="Sort by"
            placeholder="Form"
            defaultValue="Most popular"
            data={['React', 'Angular', 'Vue', 'Svelte']}
        />
    )
}