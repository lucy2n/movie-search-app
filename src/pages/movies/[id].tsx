import { useRouter } from "next/router";
import { MovieCard } from "../../components/movie-card/movie-card";
import { useState, useEffect } from "react";
import { getFilmInformation } from "../../utils/api";
import { CardSize } from "../../components/movie-card/constants";
import { AboutMovie } from "../../components/about-movie/about-movie";
import { MovieBreadCrumbs } from "@/components/bread-crumbs/bread-crumbs";
import style from './movie-id.module.css'
import { IMovieDetailsModel } from "@/types/movie";
import { LoadingOverlay } from "@mantine/core";

const MovieDescriptionSection = (): JSX.Element | null => {

    const router = useRouter();
    const { id } = router.query;
    const [film, setFilm] = useState<IMovieDetailsModel | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getFilmInformation(id as string)
        .then((res) => {
            setLoading(false);
            setFilm(res)
        });
    }, [id])

    return (
        loading ?
        <LoadingOverlay className={style.loader} /> :
        film &&
        <div className={style.main}>
            <MovieBreadCrumbs name={film.original_title} />
            <MovieCard
                film={film}
                genres={film.genres.map(g => g.name)}
                size={CardSize.big} />
            <AboutMovie 
                film={film}
            />
        </div>
    )
}

export default MovieDescriptionSection;