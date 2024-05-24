import { createFormContext } from '@mantine/form';

interface FiltersFormValues {
    genres: string[];
    year: string;
    raitingBottom: string;
    raitingTop: string;
    sortType: string;
}

export const [FiltersFormProvider, useFiltersFormContext, useFiltersForm] = createFormContext<FiltersFormValues>();