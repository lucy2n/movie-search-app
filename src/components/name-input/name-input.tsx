import { Button, TextInput, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import style from './name-input.module.css'
import { useFiltersFormContext } from '../inputs-panel/form-context';
import { useRatedFormContext } from '@/pages/rated-movies/rated-form-context';

export default function NameInput() {
    const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
    const form = useRatedFormContext();

  return (
    <div className={style.main}>
         <TextInput
           key={form.key('name')}
           {...form.getInputProps('name')}
            className={style.main}
            radius={8}
            mt="md"
            size="md"
            leftSection={icon}
            placeholder="Search movie title" 
        />
          <Button className={style.button} variant="filled" size="xs" type="submit" radius={8}>Search</Button>
    </div>
  );
}