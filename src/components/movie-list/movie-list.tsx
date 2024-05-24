import MovieCard from '../movie-card/movie-card';
import style from './movie-list.module.css'
import { CardSize } from '../movie-card/constants';
import { IMovieDetailsModel, IMovieModel } from '@/types/movie';

export interface IMovieGenresDict {
    [key: string]: string[]
}

export default function MovieList ({films, genresDict}: {films: IMovieModel[] | IMovieDetailsModel[], genresDict: IMovieGenresDict}) {

    return (
        <div className={style.main}>
        {films && films.map((film) => {
            return (
                <MovieCard 
                    film={film}
                    genres={genresDict[film.id]}
                    key={film.id} 
                    size={CardSize.small}
                />
            )
        })
        } 
        </div> 
    )
}