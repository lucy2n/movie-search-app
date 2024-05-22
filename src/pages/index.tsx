import { Group, Pagination, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { InputsPanel } from "../components/inputs-panel/inputs-panel";
import MovieList from "../components/movie-list/movie-list";
import style from './movies.module.css'
import { IMovie } from "@/types/movie";
import { getMovies, MovieFilters } from "@/utils/api";
import { useViewportSize } from "@mantine/hooks";
import BurgerMenu from "@/components/burger-menu/burger-menu";

export default function Movies () {
    const [films, setFilms] = useState<IMovie[]>([]);
    const { height, width } = useViewportSize();
    const [filters, setFilters] = useState<MovieFilters>();
    const [page, setPage] = useState<number>(1);
    const [pageNumber, setPageNumber] = useState<number>();

    useEffect(() => {
        fetchMovies()
    }, [])

    useEffect(() => {
        console.log('update triggered')
        getMovies(filters, page)
            .then((res) => {
                console.log(res.total_pages)
                setFilms(res.results)
                setPageNumber(res.total_pages)
            })
    }, [filters, page])

    const fetchMovies = (filters?: MovieFilters) => {
        setFilters(filters)
    }

    const updatePage = (page: number) => {
        console.log(page)
        setPage(page)
    }

    return (
        <Group className={style.main} >
            <Group className={style.title}>
                { width < 890 ? (
                    <BurgerMenu />
                ) : <></>
                }
                <Title>Movies</Title>
            </Group>
            <Group className={style.inputs}>
                <InputsPanel fetchMovies={fetchMovies}/>
            </Group>
            <MovieList films={films}/>
            <Pagination
                total={Math.min(3, pageNumber ?? 3)}
                onChange={updatePage}
            />
        </Group>
    )
}