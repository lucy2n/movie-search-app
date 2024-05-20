import { useRouter } from "next/router";
import MovieCard from "../../components/movie-card/movie-card";
import { useState, useEffect } from "react";
import { getFilmInformation } from "../../ulits/api";
import { CardSize } from "../../components/movie-card/constants";
import AboutMovie from "../../components/about-movie/about-movie";
import MovieBreadCrumbs from "@/components/bread-crumbs/bread-crumbs";
import style from './movie-id.module.css'
import { IMovie } from "@/types/movie";

export default function MovieDescriptionSection() {

    const router = useRouter();
    const { id } = router.query;
    const [film, setFilm] = useState<IMovie | null>(null);

    useEffect(() => {
        getFilmInformation(id as string)
        .then((res) => {
            setFilm(res)
        })
    }, [])

    return (
        film && 
        <div className={style.main}>
            <MovieBreadCrumbs name={film.original_title} />
            <MovieCard
                film={film}
                size={CardSize.big} />
            <AboutMovie 
                film={film}
            />
        </div>
    )
}