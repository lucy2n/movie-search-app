import { useState } from 'react';
import { Combobox, Input, InputBase, Loader, ScrollArea, useCombobox } from '@mantine/core';
import { getGenres } from '../../ulits/api';
import style from './genres-input.module.css';
import { IGenres } from './type';
import { useFiltersFormContext } from '../inputs-panel/form-context';

export default function GenresInput() {
  const [value, setValue] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IGenres[]>([]);
  const form = useFiltersFormContext();

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => {
      if (data.length === 0 && !loading) {
        setLoading(true);
        getGenres()
        .then((response) => {
          setData(response.genres);
          setLoading(false);
          combobox.resetSelectedOption();
        });
      }
    },
  });

  const options = data.map((item, index) => (
    <Combobox.Option value={item.name} key={item.id} onMouseOver={() => combobox.selectOption(index)}>
      {item.name}
    </Combobox.Option>
  ));

  const handleValueSelect = (val: string) => {
    const newValue = value.includes(val)
      ? value.filter((v) => v !== val)
      : [...value, val];
    setValue(newValue);
    form.setFieldValue('genres', newValue);
  };


  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        handleValueSelect(val)
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target
            key={form.key('genres')}
            {...form.getInputProps('genres')}
      >
        <InputBase
          label='Genres'
          radius='md'
          className={style.input}
          component="button"
          type="button"
          rightSection={loading ? <Loader size={18} /> : <Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value.join(", ") || <Input.Placeholder>Select genres</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
        <ScrollArea.Autosize type="scroll" mah={200}>
          {loading ? <Combobox.Empty>Loading....</Combobox.Empty> : options}
        </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
