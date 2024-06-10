import { MovieCard } from '../movie-card/movie-card';
import style from './movie-list.module.css'
import { CardSize } from '../movie-card/constants';
import { IMovieDetailsModel, IMovieModel } from '@/types/movie';
import { NoMovies } from '../no-movies/no-movies';

export interface IMovieGenresDict {
    [key: string]: string[]
}

export const MovieList = ({films, genresDict}: {films: IMovieModel[] | IMovieDetailsModel[], genresDict: IMovieGenresDict}): JSX.Element => {
    return (
        <div className={style.main}>
        {films.length > 0 ? films.map((film) => {
            return (
                <MovieCard 
                    film={film}
                    genres={genresDict[film.id]}
                    key={film.id} 
                    size={CardSize.small}
                />
            )
        })
        : 
            <NoMovies/>
        } 
        </div> 
    )
}