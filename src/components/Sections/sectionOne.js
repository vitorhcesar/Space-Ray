import React from 'react'
import CanvasOne from "../Canvas/Canvas1/canvasOne";

const SectionOne = () => {
    return (
        <section id="section-1">
            <div>
                <h1>Agora você também pode ter <b>internet</b>!</h1>
                <h2>Temos o projeto de integrar vários satélites pelo Brasil, assim obtendo uma <b>região de acesso completa!</b></h2>
            </div>
            <div className="interact">
                <h3>Interaja comigo!</h3>
                <svg id='arrow' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <CanvasOne />
            <p className="panel">É importante lembrar que ainda não temos subsídio para começar algo, então por enquanto o projeto é apenas uma idéia que esperamos por em prática o mais rápido possível!</p>
        </section>
    );
};

export default SectionOne;