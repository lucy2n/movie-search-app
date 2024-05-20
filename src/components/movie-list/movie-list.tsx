import MovieCard from '../movie-card/movie-card';
import style from './movie-list.module.css'
import { CardSize } from '../movie-card/constants';
import { IMovie } from '@/types/movie';


export default function MovieList ({films}: {films: IMovie[]}) {
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