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
        urlParams.set('vote_average.gte', filters.ratingFrom ?? "")
        urlParams.set('vote_average.lte', filters.ratingTo ?? "")
        const sort_by = getSortTypeParam(filters.sortType ?? "")
        urlParams.set('sort_by', sort_by)
        urlParams.set('page', filters.page ?? "")
        // TODO: Replace this with actual logic
        urlParams.set('language', "en")
    
        const filnalURL = `${url}&${urlParams.toString()}`
        console.log(filnalURL)
        return filnalURL
    }
}

const getSortTypeParam = (sortType: string): string => {
    switch (sortType) {
        case 'Most Popular':
            return 'popularity.desc'
        case 'Least Popular':
            return 'popularity.asc'
        case 'Most Rated':
            return 'vote_average.desc'
        case 'Least Rated':
            return 'vote_average.asc'
        case 'Most Voted':
            return 'vote_count.desc'
        case 'Least Voted':
            return 'vote_count.asc'
        default:
            return 'popularity.desc'
    }
}