import { InputsPanel } from "@/components/inputs-panel/inputs-panel";
import MovieCard from "@/components/movie-card/movie-card";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InputsPanel />
      <Container size='800px'>
        <MovieCard />
      </Container>
    </main>
  );
}
