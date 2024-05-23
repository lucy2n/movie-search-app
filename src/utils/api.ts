import { IMovie, IMovieResponse } from "@/types/movie";
import { base_url } from "./constants";
import { getMoviesUrl } from "./utils";
import { env } from "process";

const options = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: `Bearer ${env.procces.TMDB_TOKEN}`
	}
  };

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getMovies = async (filters?: MovieFilters, page?: number): Promise<IMovieResponse> => {
	const url = getMoviesUrl(filters, page);
  	const res = await fetch(url, options);
	return checkResponse<IMovieResponse>(res);
};

export const getFilmInformation = async (id: number | string): Promise<IMovie> => {
	const res = await fetch(`${base_url}/movie/${id}?language=en-US`, options)
	return checkResponse<IMovie>(res);
}

export const getGenres = async () => {
	const res = await fetch(`${base_url}/genre/movie/list?language=en`, options)
	return checkResponse(res);
}

export const getVideo = async (id: string | number) => {
	const res = await fetch(`${base_url}/movie/${id}/videos`, options)
	return checkResponse(res);
}

export interface MovieFilters {
	genres?: string[],
	year?: string,
	ratingFrom?: string,
	ratingTo?: string,
	sortType?: string,
	page?: string
}