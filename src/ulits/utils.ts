export function getImageUrl (path: string, size: string = 'original'): string {
    return `https://image.tmdb.org/t/p/${size}/${path}`
}