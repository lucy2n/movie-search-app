import NextImage from "next/image";
import { Image, Text } from "@mantine/core";
import style from './no-rated.module.css';
import image from '../../images/search.svg'

export default function NoRatedMovies () {
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
                We don't have such movies, look for another one
            </Text>
        </div>
    )
}