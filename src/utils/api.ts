import { IGenresResponse, IMovieDetailsModel, IMovieResponse, IVideoResponse, MovieFilters } from "@/types/movie";
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

export const getMovies = async (filters?: MovieFilters, page?: number): Promise<IMovieResponse> => {
	const url = getMoviesUrl(filters, page);
  	const res = await fetch(url, options);
	return checkResponse<IMovieResponse>(res);
};

export const getFilmInformation = async (id: number | string): Promise<IMovieDetailsModel> => {
	const res = await fetch(`${base_url}/movie/${id}?language=en-US`, options)
	return checkResponse<IMovieDetailsModel>(res);
}

export const getGenres = async (): Promise<IGenresResponse> => {
	const res = await fetch(`${base_url}/genre/movie/list?language=en`, options)
	return checkResponse(res);
}

export const getVideo = async (id: string | number): Promise<IVideoResponse> => {
	const res = await fetch(`${base_url}/movie/${id}/videos`, options)
	return checkResponse(res);
}