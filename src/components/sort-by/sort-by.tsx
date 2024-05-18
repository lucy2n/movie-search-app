import { Select } from "@mantine/core"
import style from './sort-by.module.css';
import { Sort } from "./constants";

export default function SortBy () {
    return (
        <Select
            radius='md'
            className={style.input}
            label="Sort by"
            placeholder="Form"
            defaultValue={Sort.mostPopular}
            data={[Sort.mostPopular, Sort.leastPopular, Sort.mostRated, Sort.leastRated, Sort.mostVoted, Sort.leastVoted]}
        />
    )
}