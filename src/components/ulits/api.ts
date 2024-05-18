const base_url = 'https://api.themoviedb.org/3'

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

export const getMovies = async () => {
  	const res = await fetch(`${base_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
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