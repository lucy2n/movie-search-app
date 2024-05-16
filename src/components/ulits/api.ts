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
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
	return checkResponse(res);
};

// export const getProfiles = async (): Promise<IVolunteers> => {
//   const res = await fetch(`${BASE_URL}/volunteer/list?pageSize=-14379090`, {
// 		method: "GET",
// 	});
// 	return checkResponse<IVolunteers>(res);
// };