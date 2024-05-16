import { InputsPanel } from "@/components/inputs-panel/inputs-panel";
import MovieCard from "@/components/movie-card/movie-card";
import SideBar from "@/components/side-bar/side-bar";
import { Container, Group, Title } from "@mantine/core";

export default function Home() {
  return (
    <main style={{display: 'flex'}}>
      <SideBar />
      <div style={{width:'1160px', backgroundColor: '#F5F5F6', margin: 0, padding: 0}}>
        <Group style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
            <Title order={2}>Movies</Title>
            <InputsPanel />
            <Container>
              <MovieCard />
            </Container>
        </Group>
      </div>
    </main>
  );
}
