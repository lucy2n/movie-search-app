import { useEffect, useState } from 'react'
import { getMovies } from '../ulits/api';
import MovieCard from '../movie-card/movie-card';
import style from './movie-list.module.css'
import { CardSize } from '../movie-card/constants';

export default function MovieList () {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        getMovies()
        .then((res) => {
            setFilms(res.results)
        })
    }, [])

    return (
        <div className={style.main}>
        {films && films.map((film) => {
            return (
                <MovieCard 
                    film={film} 
                    key={film.id} 
                    size={CardSize.small}
                />
            )
        })
        } 
        </div> 
    )
}