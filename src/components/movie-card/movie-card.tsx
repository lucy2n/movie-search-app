import { Paper, Image, Text, Group, Container, Rating } from '@mantine/core';
import style from './movie-card.module.css'
import no_bg from '../../images/no-bg.png'
import { useState } from 'react';
import { getFilmInformation } from '../ulits/api';

export default function MovieCard(film) {

    const [filmId, setFilmId] = useState('');

    async function handleId () {
        setFilmId(film.film.id)
        console.log(filmId)
    }

  return (
    <Paper onClick={handleId} className={style.main} shadow="xs" p="l" radius="20px">
        <div className={style.container}>
            <Image
                height={170}
                width={119}
                alt="The Green Mile"
                src={`http://image.tmdb.org/t/p/original${film.film.poster_path}` ? `http://image.tmdb.org/t/p/original${film.film.poster_path}` : no_bg}
            />
            <Group style={{display: "flex", flexDirection: "column", alignItems: 'start', justifyContent: "space-between",}}>
                <Group style={{dispaly: "flex", flexDirection: "column", alignItems: "start", gap: "0"}}>
                    <Text fw={700} c="grape" size="lg">{film.film.original_title}</Text>
                    <Text c="gray" size="s" fw={500}>{film.film.release_date}</Text>
                    <Group style={{margin: 0, padding: 0}}>
                        <Group style={{gap: 5}}>
                            <Rating size="lg" count={1} defaultValue={1} />
                            <Text size="s" fw={600}>{film.film.vote_average}</Text>
                        </Group>
                        <Text c="gray" size="s" fw={500}>{film.film.vote_count}</Text>
                    </Group>
                </Group>
                <Group style={{display: "flex", flexDirection:"column", alignItems: "start", gap: '7px', marginRight: '60px'}}>
                    {/* <Group>
                        <Text c="gray" size="s" style={{width: '140px'}}>Duration</Text>
                        <Text>{props.runtime}</Text>
                    </Group>
                    <Group>
                        <Text c="gray" size="s" style={{width: '140px'}}>Premiere</Text>
                        <Text>December 6, 1999</Text>
                    </Group>
                    <Group style={{display: "flex"}}>
                        <Text c="gray" size="s" style={{width: '140px'}}>Budget</Text>
                        <Text>{props.budget}</Text>
                    </Group>
                    <Group>
                        <Text c="gray" size="s" style={{width: '140px'}}>Gross worldwide</Text>
                        <Text>{props.revenue}</Text>
                    </Group> */}
                    <Group>
                        <Text c="gray" size="s" style={{width: '140px'}}>Genres</Text>
                        <Text>{film.film.genres}</Text>
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
