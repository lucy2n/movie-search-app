import { Title, Pagination } from "@mantine/core";
import { InputsPanel } from "../inputs-panel/inputs-panel";
import SortBy  from "../sort-by/sort-by";
import MovieList from "../movie-list/movie-list";
import style from './main-section.module.css'

export default function MainSection () {
    return (
        <div className={style.main} >
            <Title>Movies</Title>
            <div className={style.inputs}>
                <InputsPanel />
                <SortBy />
            </div>
            <MovieList />
            <Pagination total={3} />
        </div>
    )
}