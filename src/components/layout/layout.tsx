import Custom404 from "@/pages/404";
import SideBar from "../side-bar/side-bar";
import style from './layout.module.css'

export default function Layout({ children }) {
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