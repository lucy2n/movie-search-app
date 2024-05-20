import { Button, Image, Text } from "@mantine/core";
import NextImage from 'next/image';
import image from '../../images/pic.svg';
import style from './rated-movies.module.css'
import Link from "next/link";

export default function NoRatedMoviesSection () {
    return (
        <div className={style.main}>
            <Image 
                className={style.image}
                component={NextImage}
                alt="No rated movies"
                src={image}
            />
            <Text 
                fw={700} 
                c="dark"
                className={style.text}
            >
                You haven't rated any films yet
            </Text>
            <Link
               href={'/movies/movies'}
               style={{textDecoration: 'none'}}
            >
                <Button radius={8}>
                    Find movies
                </Button>
            </Link>
        </div>
    )
}