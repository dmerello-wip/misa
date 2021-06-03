import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Box} from "@react-three/drei";
import Gallery from '@/components/Gallery';
import Camera from '@/components/Camera';
import Floor from '@/components/Floor';

const Stage = ({contents}) => {

  const ambientColor = '#111316';
  const radius = contents.length / 2.5;
  const cameraPosition = [0, 1, radius + 3];
  const fogDistance = radius * 2.5;

  return (
    <div className="stage">
      <Canvas shadows={true} shadowMap>
        <color attach="background" args={ambientColor}/>
        <fog attach="fog" args={[ambientColor, 0, fogDistance]}/>
        <Camera position={cameraPosition}/>
        <ambientLight intensity={1}/>
        /* also spotlight could be managed with radius relation: */
        <spotLight intensity={0.6} position={[-2, 20, 30]} angle={2} penumbra={1} castShadow/>
        <spotLight intensity={0.8} position={[0, 4, 7]} angle={2} penumbra={1} castShadow/>
        <Floor color={ambientColor}/>
        <Suspense fallback={null}>
          <Gallery contents={contents} cameraPosition={cameraPosition} radius={radius}/>
        </Suspense>
      </Canvas>
    </div>
  )
};

export default Stage;

