import NextImage from "next/image";
import { Image, Text, Button } from "@mantine/core";
import Link from "next/link";
import style from './no-rated.module.css';
import image from '../../assets/images/pic.svg'

export const NoRatedMovies = (): JSX.Element => {
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
                You haven&#39;t rated any films yet
            </Text>
            <Link
               href={'/'}
               style={{textDecoration: 'none'}}
            >
                <Button radius={8}>
                    Find movies
                </Button>
            </Link>
        </div>
    )
}