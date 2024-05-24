import { Select } from "@mantine/core"
import style from './sort-by.module.css';
import { Sort } from "./constants";
import { useFiltersFormContext } from "../inputs-panel/form-context";

export const SortBy = (): JSX.Element => {
    const form = useFiltersFormContext();

    return (
        <Select
            key={form.key('sortType')}
            {...form.getInputProps('sortType')}
            radius='md'
            className={style.input}
            label="Sort by"
            placeholder="Form"
            defaultValue={Sort.mostPopular}
            data={[Sort.mostPopular, Sort.leastPopular, Sort.mostRated, Sort.leastRated, Sort.mostVoted, Sort.leastVoted]}
        />
    )
}