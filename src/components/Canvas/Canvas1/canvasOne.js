import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useGLTF } from '@react-three/drei';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

function Earth(){
    const earth = useGLTF('../lowpoly_earth/scene.gltf')

    return(
        <mesh scale={1}>
            <Html
            transform
            occlude
            position={[0, -3.5, -11]}
            rotation={[-.2, 2.6, 0]}>
                <div id='earth-marker'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <h1 style={{color: 'white'}}>Você está aqui!</h1>
                </div>
            </Html>
            <primitive object={earth.scene} scale={.09} />
            <OrbitControls 
                enableZoom={false}
                enablePan={false}/>
        </mesh>
    );
};

const CanvasOne = () => {
  return (
    <div id='canvas-1'>
        <Canvas shadows camera={{position:[0, 0, 45],fov: 25}}>
            <hemisphereLight intensity={.5} />
            <pointLight position={[10, 15, 10]} angle={0.3} intensity={1.5} />
            <Earth />
            <EffectComposer>
                <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={.2} height={480} />
                <Bloom luminanceThreshold={.4} luminanceSmoothing={0.3} height={300} />
            </EffectComposer>
        </Canvas>
    </div>
  );
};

export default CanvasOne;