import { Paper, Image, Text, Group, Rating } from '@mantine/core';
import Link from 'next/link';
import { useViewportSize } from '@mantine/hooks';
import style from './movie-card.module.css'
import no_bg from '../../images/no-bg.png'
import { CardSize } from './constants';
import clsx from 'clsx';
import { getImageUrl } from '../../utils/utils';
import { IMovieModel } from '@/types/movie';
import { useDisclosure } from '@mantine/hooks';
import RateModal from '../rate-modal/rate-modal';
import { useEffect, useState } from 'react';
import { getGenres } from '@/utils/api';

export default function MovieCard({film, size} : { film: IMovieModel | null, size: string }) {

    const { height, width } = useViewportSize();

    const image = film.poster_path !== undefined ? getImageUrl(film.poster_path) : no_bg;
    const year = new Date(film.release_date).getFullYear();

    const [rating, setRating] = useState<number>(0);
    const [genres, setGenres] = useState<string[]>([]);

    const textStyle = width > 1200 && size == 'big' ? `${style.point__text}` : '' ;

    const [opened, { open, close }] = useDisclosure(false);

    const getRating = () => {
        const savedRating = localStorage.getItem(`movie-rating-${film.id}`);
        if (savedRating) {
          setRating(parseInt(savedRating, 10));
        }
    }

    useEffect(() => {
        getRating();

        if (film.genres == undefined) {
            getGenres()
            .then(res => {
                let arr = res.genres;
                setGenres(film.genre_ids?.map(id => {
                    return arr.filter(item => item.id === id)[0].name
                }))
            })
        } else {
            setGenres(film.genres.map((g) => g.name))
        }
    }, []);

    const setupMovie = () => {
        if (film != null) {

        } else {

        }
    };

    useEffect(() => {
        getRating()
    }, [rating]);

  return (
    <>
    <RateModal opened={opened} close={close} film={film}/>
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
                <Image
                    className={style[`image_${size}`]}
                    src={image}
                    alt={film.original_title}
                />

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
                          <Text c="gray" size="s" fw={500}>{year}</Text>
                          <Group>
                              <Group key={1}>
                                  <Rating size="lg" count={1} defaultValue={1} />
                                  <Text size="s" fw={600} c="dark">{film.vote_average}</Text>
                              </Group>
                              <Text c="gray" size="s" fw={500}>{film.vote_count}</Text>
                          </Group>
                      </Group>
                      <div className={style.desc}>
                          {size === CardSize.big ? (
                            <>
                                <Group className={style.point}>
                                  <Text className={textStyle} c="gray" size="s" >Duration</Text>
                                  <Text c="dark">{film.runtime}</Text>
                                </Group>
                                <Group className={style.point}>
                                      <Text className={textStyle} c="gray" size="s" >Premiere</Text>
                                      <Text c="dark">{film.release_date}</Text>
                                </Group>
                                <Group className={style.point}>
                                      <Text className={textStyle} c="gray" size="s" >Budget</Text>
                                      <Text c="dark">{film.budget}</Text>
                                </Group>
                                <Group className={style.point}>
                                      <Text className={textStyle} c="gray" size="s" >Gross worldwide</Text>
                                      <Text c="dark">{film.revenue}</Text>
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
