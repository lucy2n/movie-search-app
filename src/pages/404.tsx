import { Button, Container, Image, Text } from "@mantine/core";
import NextImage from 'next/image';
import image from '../images/404.svg'
import style from './404.module.css'
import Link from "next/link";

export default function Custom404() {
    return (
        <Container className={style.container}>
            <div className={style.main}>
                <Image 
                    alt='404'
                    component={NextImage}
                    src={image}
                    className={style.image}
                />
                <Text fw={700} >We can't find the page you are looking for</Text>
                <Link  
                    href='/'
                    className={style.link}
                >
                    <Button radius={8} variant="filled">Go Home</Button>
                </Link>
            </div>
        </Container>
    )
}