import { SideBar } from "../side-bar/side-bar";
import style from './layout.module.css'

export const Layout = ({ children, page }: { children: JSX.Element, page: string }): JSX.Element => {
    return (
        <div className={style.main}>
            <aside>
                <SideBar page={page}/>
            </aside>
            <main className={style.section}>
                {children}
            </main>
        </div>
    )
}