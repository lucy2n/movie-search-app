import { Title, Group, Container } from "@mantine/core";
import SideBar from "@/components/side-bar/side-bar";
import MovieList from "@/components/movie-list/movie-list";
import { InputsPanel } from "@/components/inputs-panel/inputs-panel";
import SortBy from "@/components/sort-by/sort-by";

export default function Home() {
    return (
      <main style={{display: 'flex', backgroundColor: '#F5F5F6'}}>
       <section>
          <SideBar />
       </section>
       <section style={{display: 'flex', flexDirection: 'column', gap: '20px'}} >
        <Title>Movies</Title>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end', gap: '20px'}}>
          <InputsPanel />
          <SortBy />
        </div>
        <MovieList />
       </section>
      </main>
    );
  }