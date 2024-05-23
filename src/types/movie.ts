import { IGenres } from "@/components/genres-input/type";

export interface IMovieModel {
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

export interface IMovieDetailsModel {
    id: string;
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: string;
    vote_count: string;
    genres: IGenres[];
    runtime: string;
    budget: string;
    revenue: string;
    overview: string;
    production_companies: ProductionCompaniesModel[];
    video: string[];
}

export interface ProductionCompaniesModel {
    id: string;
    logo_path: string;
    name: string
}

export interface IMovieResponse {
    results: IMovieModel[];
    total_pages: number;
}

export interface IGenresResponse {
    genres: IGenres[];
}