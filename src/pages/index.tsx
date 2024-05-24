import { Loader, Group, Pagination, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { InputsPanel } from "../components/inputs-panel/inputs-panel";
import { MovieList, IMovieGenresDict } from "../components/movie-list/movie-list";
import style from './movies.module.css'
import { IMovieModel, MovieFilters } from "@/types/movie";
import { getGenres, getMovies } from "@/utils/api";
import { IGenres } from "@/types/movie";

const Movies = (): JSX.Element => {
    const [films, setFilms] = useState<IMovieModel[]>([]);
    const [filters, setFilters] = useState<MovieFilters>();
    const [page, setPage] = useState<number>(1);
    const [pageNumber, setPageNumber] = useState<number>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchMovies()
        localStorage.setItem('activeTab', 'movies');
    }, [])

    useEffect(() => {
        setLoading(true);
        getMovies(filters, page)
            .then((res) => {
                setLoading(false);
                setFilms(res.results)
                setPageNumber(res.total_pages)
            });
    }, [filters, page])

    const fetchMovies = (filters?: MovieFilters) => {
        setFilters(filters)
    }

    const updatePage = (page: number) => {
        console.log(page)
        setPage(page)
    }

    const [genres, setGenres] = useState<IGenres[]>([]);

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres) );
    }, []);
  
    const getGenresNames = (genres_id: string[]): string[] => {
        if (genres_id == undefined) {
            return []
        }
        const genresNames = genres_id.map(id => {
            return genres.find(item => item.id === +id)?.name ?? ""
        })
        return genresNames
    }

    const setupupGenresDict = (): IMovieGenresDict => {
        let dict: IMovieGenresDict = {}
        films.forEach((film) => {
            dict[film.id] = getGenresNames(film.genre_ids);
        });
        return dict
    }

    return (
        <Group className={style.main} >
            <Group className={style.title}>
                <Title>Movies</Title>
            </Group>
            <Group className={style.inputs}>
                <InputsPanel fetchMovies={fetchMovies}/>
            </Group>
            {
                loading ? 
                <Loader size="xl" /> :
                <>
                    <MovieList films={films} genresDict={setupupGenresDict()}/>
                    <Pagination
                        className={style.pagination}
                        total={Math.min(3, pageNumber ?? 3)}
                        onChange={updatePage}
                    />
                </>
            }   
        </Group>
    )
}

export default Movies;