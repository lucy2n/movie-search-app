import NextImage from "next/image";
import { Image, Text } from "@mantine/core";
import style from './no-rated.module.css';
import image from '../../images/search.svg'

export const NoRatedMovies = (): JSX.Element => {
    return (
        <div className={style.main}>
            <Image 
                className={style.image}
                component={NextImage}
                alt="We don't have such movies, look for another one"
                src={image}
            />
            <Text 
                fw={700} 
                c="dark"
                className={style.text}
            >
                We don&#39;t have such movies, look for another one
            </Text>
        </div>
    )
}