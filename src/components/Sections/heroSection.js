import CanvasOne from '@/src/components/Canvas/Canvas1/canvasOne';
import CanvasSatelite from '../Canvas/Canvas Satelite/canvasSat';

const HeroSection = () => {
  return (
    <section id='hero'>
        <div id='hero-content'>
            <div className='text'>
                <h1>Conectividade de fibra, <b>sem fibra</b>.</h1>
                <h2>Conheça a <b>space ray</b>, uma start-up brasilera que pensa nas pessoas que não tem conexão internet ☁️.</h2>
            </div>
            <div id='canvas-satelite'>
                <CanvasSatelite />
            </div>
        </div>
        <div id='scroll-hero'>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse"><rect width="12" height="18" x="6" y="3" rx="6"></rect><path d="M12 7v4"></path></svg>
            <svg id='arrow' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
    </section>
  )
}

export default HeroSection