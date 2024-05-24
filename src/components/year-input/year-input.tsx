import { Select } from "@mantine/core";
import style from './year-input.module.css'
import { useFiltersFormContext } from "../inputs-panel/form-context";

export const YearInput = (): JSX.Element => {
    const form = useFiltersFormContext();

    function compareNumbers(a: string, b: string) {
        return +b - +a;
    }

    let years = function(startYear: number) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || 1900;  
        while ( startYear <= currentYear ) {
            years.push(startYear++ + '');
        }   
        return years.sort(compareNumbers);
    }

    return(
        <Select
            key={form.key('year')}
            {...form.getInputProps('year')}
            className={style.input}
            radius='md'
            label="Release year"
            placeholder='Select release year'
            data={years(1900)}
    />
    )
}