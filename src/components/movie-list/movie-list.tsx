import MovieCard from '../movie-card/movie-card';
import style from './movie-list.module.css'
import { CardSize } from '../movie-card/constants';
import { IMovieModel } from '@/types/movie';
import { useEffect, useState } from 'react';
import { getGenres } from '@/utils/api';
import { IGenres } from '../genres-input/type';


export default function MovieList ({films}: {films: IMovieModel[]}) {

    const [genres, setGenres] = useState<IGenres[]>([]);

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres) );
    }, []);

    const getGenresNames = (genres_id: string[]): string[] => {
        const genresNames = genres_id.map(id => {
            return genres.filter(item => item.id === +id)[0].name
        })
        return genresNames
    }

    return (
        <div className={style.main}>
        {films && films.map((film) => {
            return (
                <MovieCard 
                    film={film}
                    genres={getGenresNames(film.genre_ids)}
                    key={film.id} 
                    size={CardSize.small}
                />
            )
        })
        } 
        </div> 
    )
}