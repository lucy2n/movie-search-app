import { IGenres } from "@/components/genres-input/type";

export interface IMovie {
    id: string;
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: string;
    vote_count: string;
    genres: IGenres[];
    genre_ids: string[];
    runtime: string;
    budget: string;
    revenue: string;
}

export interface IMovieResponse {
    results: IMovie[];
    total_pages: number;
    total: number;
}