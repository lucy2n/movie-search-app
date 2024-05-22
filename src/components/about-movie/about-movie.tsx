import { Paper, Title, Divider, Text, Group, Image } from "@mantine/core";
import style from './about-movie.module.css'
import { getImageUrl } from "../../utils/utils";
import { useEffect, useState } from "react";
import { getVideo } from "@/utils/api";

export default function AboutMovie ({film}) {

    const [video, setVideo] = useState(null)
     
    useEffect(() => {
        getVideo(film.id)
        .then(res => {
            setVideo(res.results[0])
        })
    })

    return (
        ( video && 
            <Paper
            className={style.main}
            shadow="xs" 
            p="l" 
            radius="20px"
        >
            {film.video ? (
                <div className={style.unit}>
                    <Title order={3}>
                        Trailer
                    </Title>
                    <iframe
                        width="600"
                        height="380"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube" />
                    <Divider my="md" />
                </div>   
            ) : <></>}
            <div className={style.unit}>
                <Title order={3}>
                    Description
                </Title>
                <Text>{film.overview}</Text>
                <Divider my="md" />
            </div>
            <div className={style.unit}>
                <Title order={3}>
                    Production
                </Title>
                <div className={style.unit}>
                    {film.production_companies.map((company,index) => (
                        <Group className={style.company} key={index}>
                            <Group className={style.image}>
                            <Image
                                width={5}
                                height={5}
                                alt={company.name}
                                src={getImageUrl(company.logo_path)}
                            />
                            </Group>
                            <Text fw={700}>{company.name}</Text>
                        </Group>
                    ))}
                </div>
            </div>
        </Paper>

        )
    )
}