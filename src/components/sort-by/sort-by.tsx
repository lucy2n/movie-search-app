import { Combobox, Input, InputBase, Select, useCombobox } from "@mantine/core"
import style from './sort-by.module.css';
import { Sort } from "./constants";
import { useFiltersFormContext } from "../inputs-panel/form-context";
import { useState } from "react";

export const SortBy = (): JSX.Element => {
    const form = useFiltersFormContext();

    const [value, setValue] = useState<string | null>(null);

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
      });

    const data = [Sort.mostPopular, Sort.leastPopular, Sort.mostRated, Sort.leastRated, Sort.mostVoted, Sort.leastVoted];

    const options = data.map((item, index) => (
        <Combobox.Option value={item} key={item} onMouseOver={() => combobox.selectOption(index)}>
          {item}
        </Combobox.Option>
      ));

    return (
        <Combobox
        store={combobox}
        withinPortal={false}
        onOptionSubmit={(val) => {
          setValue(val);
          form.setFieldValue('sortType', val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target
             key={form.key('sortType')}
            {...form.getInputProps('sortType')}
        >
          <InputBase
            component="button"
            label="Sort by"
            radius='md'
            className={style.input}
            type="button"
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => combobox.toggleDropdown()}
            rightSectionPointerEvents="none"
          >
            {value || <Input.Placeholder>Sort by</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>
  
        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    )
}