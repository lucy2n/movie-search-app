import { Paper, Image, Text, Group, Rating, Loader } from '@mantine/core';
import Link from 'next/link';
import NextImage from 'next/image'
import { useViewportSize } from '@mantine/hooks';
import style from './movie-card.module.css'
import no_bg from '../../assets/images/no-bg.png'
import { CardSize } from './constants';
import clsx from 'clsx';
import { getImageUrl } from '../../utils/utils';
import { IMovieDetailsModel, IMovieModel } from '@/types/movie';
import { useDisclosure } from '@mantine/hooks';
import { RateModal } from '../rate-modal/rate-modal';
import { useEffect, useState } from 'react';
import { convertMinutesToHoursAndMinutes, formatCurrency, formatDate } from '@/utils/date-time';

interface IMovieCardProps {
    film: IMovieModel | IMovieDetailsModel;
    genres: string[];
    size: string;
}

export const MovieCard = ({film, genres, size} : IMovieCardProps): JSX.Element => {

    const { height, width } = useViewportSize();

    const image = film.poster_path !== null ? getImageUrl(film.poster_path) : no_bg;
    const year = new Date(film.release_date).getFullYear();

    const [rating, setRating] = useState<number>(0);

    const textStyle = width > 1200 && size == 'big' ? `${style.point__text}` : '' ;

    const [opened, { open, close }] = useDisclosure(false);

    const getRating = () => {
        const savedRating = localStorage.getItem(`movie-rating-${film.id}`);
        if (savedRating) {
          setRating(parseInt(savedRating, 10));
        } else {
            setRating(0);
        }
    }

    useEffect(() => {
        getRating();
    }, []);

    useEffect(() => {
        getRating()
    }, [rating]);

  return (
    <>
    <RateModal opened={opened} close={close} filmId={film.id} filmTitle={film.original_title} updateRating={getRating}/>
        <Paper
          className={clsx(
              style.main,
              style[`main_${size}`]
          )}
          shadow="xs"
          p="l"
          radius="20px"
        > 
            <div className={clsx(
                style.container,
                style[`container_${size}`]
            )}>
                {film.poster_path !== null ? (
                        <Image
                            className={style[`image_${size}`]}
                            src={image}
                            alt={film.original_title}
                        />
                    ) : (
                        <Image
                            className={style[`image_${size}`]}
                            component={NextImage}
                            src={no_bg}
                            alt={film.original_title}
                        />
                    )
                }
                <Link 
                    key={film.id} 
                    href={`/movies/${film.id}`}
                    className={style.link}
                >  
                    <Group
                    className={clsx(
                        style.info,
                        style[`info_${size}`]
                    )}
                    > 
                    <Group className={style.desc}>
                        <Text fw={700} c="#9854F6" size="lg">{film.original_title}</Text>
                        <Text c="gray" size="s" fw={500}>{Number.isNaN(year) ? 'no information' : year}</Text>
                        <Group>
                            <Group key={1}>
                                <Rating size="lg" count={1} defaultValue={1} />
                                <Text size="s" fw={600} c="dark">{Math.round(+film.vote_average * 10) / 10}</Text>
                            </Group>
                            <Text c="gray" size="s" fw={500}>{film.vote_count}</Text>
                        </Group>
                    </Group>
                    <div className={style.desc}>
                        {size === CardSize.big ? (
                            <>
                                <Group className={style.point}>
                                <Text className={textStyle} c="gray" size="s" >Duration</Text>
                                <Text c="dark">{convertMinutesToHoursAndMinutes(+film.runtime)}</Text>
                                </Group>
                                <Group className={style.point}>
                                    <Text className={textStyle} c="gray" size="s" >Premiere</Text>
                                    <Text c="dark">{formatDate(film.release_date)}</Text>
                                </Group>
                                <Group className={style.point}>
                                    <Text className={textStyle} c="gray" size="s" >Budget</Text>
                                    <Text c="dark">{formatCurrency(+film.budget)}</Text>
                                </Group>
                                <Group className={style.point}>
                                    <Text className={textStyle} c="gray" size="s" >Gross worldwide</Text>
                                    <Text c="dark">{formatCurrency(+film.revenue)}</Text>
                                </Group>
                            </>
                        ) : <></>}
                        <Group className={style.point}>
                                <Text className={textStyle} c="gray" size="s">Genres</Text>
                                <Text className={style.genres} c="dark">{genres?.join(', ')}</Text>
                        </Group>
                    </div>
                </Group>
                </Link>
                <Group 
                    className={clsx(
                        style.rating,
                        style[`rating_${size}`]
                    )
                }>
                    <Rating 
                        onClick={open} 
                        size="lg" 
                        count={1}
                        value={rating > 0 ? 1 : 0} 
                        color='#9854F6' 
                    />
                    { rating > 0 &&
                        <Text c="dark" fw={700}>{rating}</Text>
                    }
                </Group>  
            </div>
          </Paper></>
  );
}