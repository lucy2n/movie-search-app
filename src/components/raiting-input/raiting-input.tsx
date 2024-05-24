import { ComboboxItem, Select } from "@mantine/core";
import style from './raiting-input.module.css'
import { useState } from "react";
import { useFiltersFormContext } from "../inputs-panel/form-context";

export const RaitingInput = (): JSX.Element => {

    const raiting = Array.from({length: 10}, (_, i) => i + 1 + '');
    const [bottomValue, setBottomValue] = useState<string>('');
    const [topVallue, setTopValue] = useState<string>('')
    const form = useFiltersFormContext();

    const handleChangeBottom = (_value: string | null, option: ComboboxItem) => {
        setBottomValue(option.value)
        form.setFieldValue('raitingBottom', option.value);
    }

    const handleChangeTop = (_value: string | null, option: ComboboxItem) => {
        setTopValue(option.value)
        form.setFieldValue('raitingTop', option.value);
    }

    return (
        <div className={style.selects}>
        <Select
            key={form.key('raitingBottom')}
            {...form.getInputProps('raitingBottom')}
            radius='md'
            className={`${style.input} ${style.input_type_raiting}`}
            label="Raiting"
            placeholder="Form"
            value={bottomValue ? bottomValue : null}
            onChange={handleChangeBottom}
            data={raiting.filter(item => topVallue != '' ? +item < +topVallue : true )}
        />
        <Select
            key={form.key('raitingTop')}
            {...form.getInputProps('raitingTop')}
            radius='md'
            className={`${style.input} ${style.input_type_raiting}`}
            placeholder="To"
            value={topVallue ? topVallue : null}
            onChange={handleChangeTop}
            data={raiting.filter(item => bottomValue != '' ? +item > +bottomValue : true )}
        />
        </div>
    )
}