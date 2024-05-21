import { Group, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { InputsPanel } from "../components/inputs-panel/inputs-panel";
import MovieList from "../components/movie-list/movie-list";
import style from './movies.module.css'
import { IMovie } from "@/types/movie";
import { getMovies, MovieFilters } from "@/ulits/api";
import { useViewportSize } from "@mantine/hooks";
import BurgerMenu from "@/components/burger-menu/burger-menu";

export default function Movies () {
    const [films, setFilms] = useState<IMovie[]>([]);
    const { height, width } = useViewportSize();

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = (filters?: MovieFilters) => {
        console.log("applied filters", filters)
        getMovies(filters)
        .then((res) => setFilms(res.results))
    }

    return (
        <Group className={style.main} >
            <Group>
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
        </Group>
    )
}