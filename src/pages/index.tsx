import MainSection from "@/components/main-section/main-section";
import SideBar from "@/components/side-bar/side-bar";

export default function Home() {
    return (
      <main style={{display: 'flex', backgroundColor: '#F5F5F6'}}>
       <section>
          <SideBar />
       </section>
       <section style={{padding: '30px 60px'}}>
          <MainSection />
       </section>
      </main>
    );
  }