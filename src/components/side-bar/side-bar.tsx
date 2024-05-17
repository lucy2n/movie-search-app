import { Title, Image } from "@mantine/core";
import style from './side-bar.module.css';
import NextImage from 'next/image';
import side from '../../images/side.svg'
import MenuTabs from "../tabs/tabs";

export default function SideBar () {
    return(
        <div className={style.main}>
            <div className={style.text}>
                <Image
                    component={NextImage}
                    h={32}
                    w={32}
                    fit="contain"
                    alt="Side"
                    src={side}
                />
                <Title order={3} style={{color: '#9854F6'}}>ArrowFlicks</Title>
            </div>
            <MenuTabs />
        </div>
    )
}