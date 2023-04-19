import { Suspense, useRef } from "react"

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Canvas Loader/canvasLoader";

function Satelite(){
    const satelite = useGLTF('../low_poly_satellite/scene.gltf')
    
    const myMesh = useRef();

    useFrame(({ clock }) => {
        myMesh.current.rotation.x = clock.getElapsedTime() / 4;
        myMesh.current.rotation.y = clock.getElapsedTime() / 2;
    });

    return(
        <mesh ref={myMesh} scale={1}>
            <primitive
             object={satelite.scene}
             scale={2.7}
             position={[0, -7, 1]} />
        </mesh>
    );
};

const CanvasSatelite = () => {
    return (
        <Canvas shadows camera={{position:[30, 45, 45],fov: 50}}>
            <pointLight position={[20, 15, 10]} angle={0.3} intensity={1.5} castShadow/>
            <Suspense fallback={<CanvasLoader />}>
                <Satelite />
            </Suspense>
        </Canvas>
    );
};

export default CanvasSatelite;