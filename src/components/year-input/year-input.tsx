import { Select } from "@mantine/core";
import style from './year-input.module.css'

export default function YearInput() {

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
            className={style.input}
            radius='md'
            label="Release year"
            placeholder='Select release year'
            data={years(1900)}
    />
    )
}