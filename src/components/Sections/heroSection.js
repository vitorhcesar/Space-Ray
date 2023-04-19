import CanvasOne from '@/src/components/Canvas/Canvas1/canvasOne';
import CanvasSatelite from '../Canvas/Canvas Satelite/canvasSat';

const HeroSection = () => {
  return (
    <section id='hero'>
        <div className='text'>
            <h1>Conectividade de fibra, <b>sem fibra</b>.</h1>
            <h2>Conheça a <b>space ray</b>, uma start-up brasilera que pensa nas pessoas que não tem conexão internet ☁️.</h2>
        </div>
        <div id='canvas-satelite'>
            <CanvasSatelite />
        </div>
    </section>
  )
}

export default HeroSection