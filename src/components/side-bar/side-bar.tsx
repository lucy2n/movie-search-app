import { Container, Group, Title, SegmentedControl, Image } from "@mantine/core";
import style from './side-bar.module.css';
import NextImage from 'next/image';
import side from '../../images/side.svg'

export default function SideBar () {
    return(
        <div style={{width: '280px', height: '100vh', backgroundColor: '#F2EBF9'}}>
            <Group style={{display: 'flex', gap: 0}}>
                <Image
                    component={NextImage}
                    h={32}
                    w={32}
                    fit="contain"
                    alt="Side"
                    src={side}
                />
                <Title order={3} style={{color: '#9854F6'}}>ArrowFlicks</Title>
            </Group>
            <SegmentedControl 
                className={`${style.innerLabel} ${style.label}`}
                color="#E5D5FA"
                data={['Movies', 'Rated movies']} 
                orientation="vertical"
                />

        </div>
    )
}