import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useGLTF } from '@react-three/drei';

function Earth(){
    const earth = useGLTF('../lowpoly_earth/scene.gltf')

    return(
        <mesh scale={1}>
            <primitive object={earth.scene} scale={.04} />
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
            <pointLight position={[20, 15, 10]} angle={0.3} intensity={1.5} />
            <Stars />
            <Earth />
        </Canvas>
    </div>
  );
};

export default CanvasOne;