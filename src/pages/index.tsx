import MainSection from "@/components/main-section/main-section";
import SideBar from "@/components/side-bar/side-bar";
import { Pagination } from "@mantine/core";

export default function Home() {
    return (
        <main style={{display: 'flex', backgroundColor: '#F5F5F6'}}>
            <section>
                <SideBar />
            </section>
            <section style={{display: 'flex', flexDirection: 'column', alignItems: 'end', padding: '30px 60px', gap: '20px'}}>
                <MainSection />
                <Pagination total={3} />
            </section>
        </main>
    )
}