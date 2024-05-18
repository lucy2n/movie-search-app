import MovieCard from "../movie-card/movie-card";
import { useState, useEffect } from "react";
import { getFilmInformation } from "../ulits/api";
import { CardSize } from "../movie-card/constants";
import AboutMovie from "../about-movie/about-movie";

export default function MovieDescriptionSection() {

    const [film, setFilm] = useState(null);

    useEffect(() => {
        getFilmInformation('693134')
        .then((res) => {
            console.log("-->", res)
            setFilm(res)
        })
    }, [])

    return (
        film && 
        <><MovieCard
            film={film}
            size={CardSize.big} />
            <AboutMovie 
                film={film}
            />
        </>
    )
}