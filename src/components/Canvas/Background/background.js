import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import CanvasLoader from '../Canvas Loader/canvasLoader';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

function Stars(props) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    );
};

const Background = () => {
    return (
        <div id='back'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={<CanvasLoader />}>
                    <Stars />
                </Suspense>
                <EffectComposer>
                    <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={.2} height={480} />
                    <Bloom luminanceThreshold={.2} luminanceSmoothing={.5} height={300} />
                    <Noise opacity={.2} />
                    <Vignette eskil={false} offset={.3  } darkness={1.5} />
                </EffectComposer>
            </Canvas>
        </div>
    );
};


export default Background;