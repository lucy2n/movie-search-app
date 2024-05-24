import { Title, Image } from "@mantine/core";
import style from './side-bar.module.css';
import NextImage from 'next/image';
import side from '../../assets/images/side.svg'
import { MenuTabs } from "../tabs/tabs";
import clsx from "clsx";

export const SideBar = ({ page }: { page: string }): JSX.Element => {
    return(
            <div  className={clsx(
                style.main,
                style[`main_${page}`]
            )} >
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
            {page === '404' ? <></> :  <MenuTabs />}
            </div>
    )
}