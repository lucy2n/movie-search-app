import { Select } from "@mantine/core";
import style from './raiting-input.module.css'
import { useState } from "react";

export default function RaitingInput () {

    const [raiting, setRaiting] = useState<string[]>(Array.from({length: 10}, (_, i) => i + 1 + ''));
    const [bottomValue, setBottomValue] = useState<string>('');
    const [topVallue, setTopValue] = useState<string>('')

    function some() {

    }

    return (
        <div className={style.selects}>
        <Select
            radius='md'
            className={`${style.input} ${style.input_type_raiting}`}
            label="Raiting"
            placeholder="Form"
            value={bottomValue ? bottomValue : null}
            onChange={(_value, option) => setBottomValue(option.value)}
            data={raiting.filter(item => topVallue != '' ? +item < +topVallue : true )}
        />
        <Select
            radius='md'
            className={`${style.input} ${style.input_type_raiting}`}
            placeholder="To"
            value={topVallue ? topVallue : null}
            onChange={(_value, option) => setTopValue(option.value)}
            data={raiting.filter(item => bottomValue != '' ? +item > +bottomValue : true )}
        />
        </div>
    )
}