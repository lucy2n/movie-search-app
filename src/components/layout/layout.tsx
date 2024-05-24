import { SideBar } from "../side-bar/side-bar";
import style from './layout.module.css'

export const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
        <div className={style.main}>
            <aside>
                <SideBar />
            </aside>
            <main className={style.section}>
                {children}
            </main>
        </div>
    )
}