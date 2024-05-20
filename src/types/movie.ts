export interface IMovie {
    id: string;
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: string;
    vote_count: string;
    genre_ids: string[];
    runtime: string;
    budget: string;
    revenue: string;
}

export interface IMovieResponse {
    results: IMovie[];
    total: number;
}