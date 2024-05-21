import { Title, Image } from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import style from './side-bar.module.css';
import NextImage from 'next/image';
import side from '../../images/side.svg'
import MenuTabs from "../tabs/tabs";
import BurgerMenu from "../burger-menu/burger-menu";

export default function SideBar () {

    const { height, width } = useViewportSize();

    return(
        (width > 890 ?
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
        
        : <></>
        )
    )
}