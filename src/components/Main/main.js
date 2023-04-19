import CanvasOne from "../Canvas/Canvas1/canvasOne";
import HeroSection from "../Sections/heroSection";

const MainContent = () => {
  return (
    <main>
        <HeroSection />
        <section id="section-1">
            <div>
                <h1>Agora você também pode ter <b>internet</b>!</h1>
                <h2>Temos o projeto de integrar vários satélites pelo Brasil, assim obtendo uma <b>região de acesso completa!</b></h2>
            </div>
            <CanvasOne />
            <p>É importante lembrar que ainda não temos subsídio para começar algo, então por enquanto o projeto é apenas uma idéia que esperamos por em prática o mais rápido possível!</p>
        </section>
    </main>
  )
}

export default MainContent;