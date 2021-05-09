import { useRef } from 'react';
import { Canvas } from "react-three-fiber";
import { PerspectiveCamera } from '@react-three/drei';

const Gallery = ({contents})=> {

  const cameraRef = useRef();

  return (
    <div className="gallery">
      <Canvas>
        <mesh>
          <planeBufferGeometry />
          <meshPhongMaterial color="royalblue" />
        </mesh>
        <ambientLight intensity={0.2} />
        <pointLight intensity={0.1} position={[-3, -4, -1]} />
        <pointLight intensity={0.1} position={[3, -4, 1]} />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0,0,4]}
          rotation={[0,0,0]}
          far={60}
        />
      </Canvas>
    </div>
  )
};


export default Gallery;

