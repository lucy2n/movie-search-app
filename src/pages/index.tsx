import MovieBreadCrumbs from "@/components/bread-crumbs/bread-crumbs";
import MainSection from "@/components/main-section/main-section";
import MovieDescriptionSection from "@/components/movie-details-section/movie-details-section";
import SideBar from "@/components/side-bar/side-bar";
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