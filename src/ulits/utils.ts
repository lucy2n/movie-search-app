import { MovieFilters } from "./api";
import { base_url } from "./constants";

export function getImageUrl (path: string, size: string = 'original'): string {
    return `https://image.tmdb.org/t/p/${size}/${path}`
}

export function getVideoUrl (id: string): string {
    return `https://api.themoviedb.org/3/movie/${id}/videos`
}

export function getMoviesUrl(filters?: MovieFilters): string {
    const url = `${base_url}/discover/movie?include_adult=true&include_video=true`
    if(filters === undefined) {
        return url
    } else {
        let urlParams = new URLSearchParams()
        urlParams.set('with_genres', filters?.genres?.join(", ").toLowerCase() ?? "")
        urlParams.set('primary_release_year', filters.year ?? "")
        urlParams.set('vote_average.lte', filters.ratingFrom ?? "")
        urlParams.set('vote_average.gte', filters.ratingTo ?? "")
        urlParams.set('sort_by', filters.sortType ?? "")
        urlParams.set('page', filters.page ?? "")
        // TODO: Replace this with actual logic
        urlParams.set('language', "en")
    
        const filnalURL = `${url}&${urlParams.toString()}`
        return filnalURL
    }
}