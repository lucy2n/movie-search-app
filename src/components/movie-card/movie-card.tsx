import { Paper, Image, Text, Group, Rating } from '@mantine/core';
import style from './movie-card.module.css'
import no_bg from '../../images/no-bg.png'
import { useState } from 'react';
import { CardSize } from './constants';
import clsx from 'clsx';
import { getImageUrl } from '../../ulits/utils';

export default function MovieCard({film, size}) {

    const image = film.poster_path ? getImageUrl(film.poster_path) : no_bg;
    const year = new Date(film.release_date).getFullYear();
    const imageWidth = size === CardSize.big ? 250 : 119;
    const imageHeight = size === CardSize.big ? 353 : 170;

  return (
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
			)} >
            <Image
                height={imageHeight}
                width={imageWidth}
                alt={film.original_title}
                src={image}
            />
            <Group 
                className={clsx(
                    style.info,
                    style[`info_${size}`]
                )}
            >
                <Group style={{dispaly: "flex", flexDirection: "column", alignItems: "start", gap: "0", width: '240px'}}>
                    <Text fw={700} c="grape" size="lg">{film.original_title}</Text>
                    <Text c="gray" size="s" fw={500}>{year}</Text>
                    <Group style={{margin: 0, padding: 0}}>
                        <Group style={{gap: 5}}>
                            <Rating size="lg" count={1} defaultValue={1} />
                            <Text size="s" fw={600} c="dark">{film.vote_average}</Text>
                        </Group>
                        <Text c="gray" size="s" fw={500}>{film.vote_count}</Text>
                    </Group>
                </Group>
                <Group style={{display: "flex", flexDirection:"column", alignItems: "start", gap: '7px'}}>
                    { size === CardSize.big ?  (
                            <><Group>
                              <Text c="gray" size="s" style={{ width: '140px' }}>Duration</Text>
                              <Text c="dark">{film.runtime}</Text>
                          </Group><Group>
                                  <Text c="gray" size="s" style={{ width: '140px' }}>Premiere</Text>
                                  <Text>December 6, 1999</Text>
                              </Group><Group style={{ display: "flex" }}>
                                  <Text c="gray" size="s" style={{ width: '140px' }}>Budget</Text>
                                  <Text c="dark">{film.budget}</Text>
                              </Group><Group>
                                  <Text c="gray" size="s" style={{ width: '140px' }}>Gross worldwide</Text>
                                  <Text c="dark">{film.revenue}</Text>
                              </Group></> 
                        ) : <></>
                    }
                    <Group className={style.point}>
                        <Text c="gray" size="s" style={{width: '140px'}}>Genres</Text>
                        <Text c="dark">genres</Text>
                    </Group>
                </Group>
            </Group> 
            <Group>
                <Rating size="lg" count={1} defaultValue={0} color='grape'/>
            </Group>
        </div>
    </Paper>
  );
}
