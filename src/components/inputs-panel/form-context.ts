import { createFormContext } from '@mantine/form';

interface FiltersFormValues {
    genres: string[] | null;
    year: string | null;
    raitingBottom: string | null;
    raitingTop: string | null;
    sortType: string | null;
}

export const [FiltersFormProvider, useFiltersFormContext, useFiltersForm] = createFormContext<FiltersFormValues>();