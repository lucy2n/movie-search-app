import { createFormContext } from '@mantine/form';

interface RatedFormValues {
    name: string | null;
}

export const [RatedFormProvider, useRatedFormContext, useRatedForm] = createFormContext<RatedFormValues>();