import { format } from 'date-fns';

export function convertMinutesToHoursAndMinutes(minutes: number): string  {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const formattedMinutes = remainingMinutes.toString().padStart(2, '0');
    const formattedTime = `${hours}h ${formattedMinutes}m`;
    return formattedTime;
}

export function formatDate(filmDate: string): string  {
    if(filmDate === '') {
        return 'no information'
    }
    const date = new Date(filmDate);
    return format(date, 'MMMM d, yyyy');
}

export function formatCurrency(value: number): string  {
    const formattedValue: string = value.toLocaleString('en-US');
    return `$${formattedValue}`;
}
  