import { Combobox, Input, InputBase, ScrollArea, Select, useCombobox } from "@mantine/core";
import style from './year-input.module.css'
import { useFiltersFormContext } from "../inputs-panel/form-context";
import { useEffect, useState } from "react";

export const YearInput = (): JSX.Element => {
    const form = useFiltersFormContext();

    function compareNumbers(a: string, b: string) {
        return +b - +a;
    }

    useEffect(() => {
        generateYears(1900);
    }, []);

    const [data, setData] = useState<string[]>([]);

    const generateYears = (startYear: number) => {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || 1900;  
        while ( startYear <= currentYear ) {
            years.push(startYear++ + '');
        }   
        setData(years.sort(compareNumbers));
    }

    const [value, setValue] = useState<string | null>(null);

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
      });


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
          combobox.closeDropdown();
          form.setFieldValue('year', val);
        }}
      >
        <Combobox.Target
             key={form.key('year')}
            {...form.getInputProps('year')}
        >
          <InputBase
            component="button"
            label="Release year"
            radius='md'
            className={style.input}
            type="button"
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => combobox.toggleDropdown()}
            rightSectionPointerEvents="none"
          >
            {value || <Input.Placeholder>Select release year</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>
  
        <Combobox.Dropdown>
        <Combobox.Options>
        <ScrollArea.Autosize type="scroll" mah={200}>
          {options}
        </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
      </Combobox>
    )
}