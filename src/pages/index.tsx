import { Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { InputsPanel } from "../components/inputs-panel/inputs-panel";
import MovieList from "../components/movie-list/movie-list";
import style from './movies.module.css'
import { IMovie } from "@/types/movie";
import { getMovies, MovieFilters } from "@/ulits/api";

export default function Movies () {
    const [films, setFilms] = useState<IMovie[]>([]);

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = (filters?: MovieFilters) => {
        console.log("applied filters", filters)
        getMovies(filters)
        .then((res) => setFilms(res.results))
    }

    return (
        <div className={style.main} >
            <Title>Movies</Title>
            <div className={style.inputs}>
                <InputsPanel fetchMovies={fetchMovies}/>
            </div>
            <MovieList films={films}/>
        </div>
    )
}