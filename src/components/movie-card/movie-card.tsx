import { Paper, Image, Text, Badge, Button, Group, Container, Rating } from '@mantine/core';
import style from './movie-card.module.css'
import NextImage from 'next/image';
import no_bg from '../../images/no-bg.png'

export default function MovieCard() {
  return (
    <Paper className={style.main} shadow="xs" p="xl" radius="20px">
        <Container style={{display: 'flex', alignItems: 'start', width: '730px', gap: "20px", margin: '0', padding: '0'}}>
            <Image
                component={NextImage}
                h={350}
                w={250}
                fit="contain"
                alt="The Green Mile"
                src={no_bg}
            />
            <Group style={{display: "flex", flexDirection: "column", alignItems: 'start', justifyContent: "space-between", gap: "115px"}}>
                <Group style={{dispaly: "flex", flexDirection: "column", alignItems: "start", gap: "0"}}>
                    <Text fw={700} c="grape" size="lg">The Green Mile</Text>
                    <Text c="gray" size="s" fw={500}>1990</Text>
                    <Group style={{margin: 0, padding: 0}}>
                        <Group style={{gap: 5}}>
                            <Rating size="lg" count={1} defaultValue={1} />
                            <Text size="s" fw={600}>9.2</Text>
                        </Group>
                        <Text c="gray" size="s" fw={500}>2.6m</Text>
                    </Group>
                </Group>
                <Group style={{display: "flex", flexDirection:"column", alignItems: "start", gap: '7px', marginRight: '60px'}}>
                    <Group>
                        <Text c="gray" size="s" style={{width: '140px'}} >Duration</Text>
                        <Text>3h 09m</Text>
                    </Group>
                    <Group>
                        <Text c="gray" size="s" style={{width: '140px'}}>Premiere</Text>
                        <Text>December 6, 1999</Text>
                    </Group>
                    <Group style={{display: "flex"}}>
                        <Text c="gray" size="s" style={{width: '140px'}}>Budget</Text>
                        <Text>$125,000,000</Text>
                    </Group>
                    <Group>
                        <Text c="gray" size="s" style={{width: '140px'}}>Gross worldwide</Text>
                        <Text>$760,006,945</Text>
                    </Group>
                    <Group>
                        <Text c="gray" size="s" style={{width: '140px'}}>Genres</Text>
                        <Text>Drama, Crime, Fantasy</Text>
                    </Group>
                </Group>
            </Group> 
            <Group>
                <Rating size="lg" count={1} defaultValue={0} color='grape'/>
            </Group>
        </Container>
    </Paper>
  );
}
