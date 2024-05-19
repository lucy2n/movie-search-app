import MainSection from "@/components/main-section/main-section";
import { Pagination } from "@mantine/core";

export default function Home() {
    return (
        <main style={{display: 'flex', backgroundColor: '#F5F5F6'}}>
            <MainSection />
            {/* <MovieBreadCrumbs />
            <MovieDescriptionSection /> */}
        </main>
    )
}