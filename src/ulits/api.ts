import { base_url } from "./constants";
import { getMoviesUrl } from "./utils";

const options = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2E5ZmMzYmY0ZDNkOGIyMWZhMDM5NmNiM2RlNDFkZSIsInN1YiI6IjY2NDVmNGIwMTg0YTQ2MzE3MjkxZDlhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLT8DM5qs-GIvi5N9gJbXa3WjR8q8ocmhP-gsHYf-uM'
	}
  };

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getMovies = async (filters: MovieFilters) => {
	const url = getMoviesUrl(filters);
  	const res = await fetch(url, options);
	return checkResponse(res);
};

export const getFilmInformation = async (id: number | string) => {
	const res = await fetch(`${base_url}/movie/${id}?language=en-US`, options)
	return checkResponse(res);
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