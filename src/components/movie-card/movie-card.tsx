import { Paper, Image, Text, Group, Rating } from '@mantine/core';
import Link from 'next/link';
import style from './movie-card.module.css'
import no_bg from '../../images/no-bg.png'
import { CardSize } from './constants';
import clsx from 'clsx';
import { getImageUrl } from '../../ulits/utils';
import { IMovie } from '@/types/movie';
import { useDisclosure } from '@mantine/hooks';
import RateModal from '../rate-modal/rate-modal';
import { useEffect, useState } from 'react';
import { getGenres } from '@/ulits/api';
import NextImage from 'next/image';

export default function MovieCard({film, size} : { film: IMovie, size: string }) {

    const image = film.poster_path !== undefined ? getImageUrl(film.poster_path) : no_bg;
    const year = new Date(film.release_date).getFullYear();
    const imageWidth = size === CardSize.big ? 250 : 119;
    const imageHeight = size === CardSize.big ? 353 : 170;

    const [rating, setRating] = useState<number>(0);
    const [genres, setGenres] = useState<string[]>([]);

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
    }, [])

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
                      src={image}
                      height={imageHeight}
                      width={imageWidth}
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
                      <Group style={{ dispaly: "flex", height: '112px', flexDirection: "column", alignItems: "start", gap: "0"}}>
                          <Text fw={700} c="grape" size="lg">{film.original_title}</Text>
                          <Text c="gray" size="s" fw={500}>{year}</Text>
                          <Group style={{ margin: 0, padding: 0 }}>
                              <Group style={{ gap: 5 }}>
                                  <Rating size="lg" count={1} defaultValue={1} />
                                  <Text size="s" fw={600} c="dark">{film.vote_average}</Text>
                              </Group>
                              <Text c="gray" size="s" fw={500}>{film.vote_count}</Text>
                          </Group>
                      </Group>
                      <Group style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: '5px' }}>
                          {size === CardSize.big ? (
                              <><Group>
                                  <Text c="gray" size="s" style={{ width: '140px' }}>Duration</Text>
                                  <Text c="dark">{film.runtime}</Text>
                              </Group><Group>
                                      <Text c="gray" size="s" style={{ width: '140px' }}>Premiere</Text>
                                      <Text c="dark">December 6, 1999</Text>
                                  </Group><Group style={{ display: "flex" }}>
                                      <Text c="gray" size="s" style={{ width: '140px' }}>Budget</Text>
                                      <Text c="dark">{film.budget}</Text>
                                  </Group><Group>
                                      <Text c="gray" size="s" style={{ width: '140px' }}>Gross worldwide</Text>
                                      <Text c="dark">{film.revenue}</Text>
                                  </Group></>
                          ) : <></>}
                          <Group className={style.point}>
                              <Text c="gray" size="s">Genres</Text>
                                    <Text className={style.genres} c="dark">{genres?.join(', ')}</Text>
                          </Group>
                      </Group>
                  </Group>
                </Link>
                <div style={{position: 'absolute', right: '20px', top:'20px', display: 'flex', alignItems: 'center'}}>
                      <Rating 
                            className={style.rating}
                            onClick={open} 
                            size="lg" 
                            count={1}
                            value={rating > 0 ? 1 : 0} 
                            color='grape' 
                        />
                        { rating > 0 &&
                            <Text c="dark" fw={700}>{rating}</Text>
                        }
                </div>  
              </div>
          </Paper></>
  );
}
