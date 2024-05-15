import { useState } from 'react';
import { Combobox, Select, Title, useCombobox, Button, MultiSelect } from '@mantine/core';
import style from './inputs-panel.module.css'

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
];

export function InputsPanel() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <div className={style.panel}>
            <MultiSelect
                className={style.input}
                label="Genres"
                placeholder='Select genre'
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />
            <MultiSelect
                className={style.input}
                label="Release year"
                placeholder='Select release year'
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />

            <div className={style.selects}>
            <Select
                className={`${style.input} ${style.input_type_raiting}`}
                label="Raiting"
                placeholder="Form"
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />
            <Select
                className={`${style.input} ${style.input_type_raiting}`}
                placeholder="To"
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />
            </div>
        <Button variant="transparent" color="gray">Reset filters</Button>
    </div>
    )
}