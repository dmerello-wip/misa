import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Box} from "@react-three/drei";
import Gallery from '@/components/Gallery';
import Camera from '@/components/Camera';
import Floor from '@/components/Floor';

const Stage = ({contents}) => {

  const ambientColor = '#111316';
  const cameraPosition = [0, 1, 15];

  return (
    <div className="stage">
      <Canvas shadows={true} shadowMap>
        <color attach="background" args={ambientColor}/>
        <fog attach="fog" args={[ambientColor, 0, 28]}/>
        <ambientLight intensity={1}/>
        <spotLight intensity={0.5} position={[-2, 20, 30]} angle={2} penumbra={1} castShadow/>
        <spotLight intensity={1} position={[0, 4, 6]} angle={2} penumbra={1} castShadow/>
        <Camera position={cameraPosition}/>
        <Floor color={ambientColor}/>
        <Suspense fallback={null}>
          <Gallery contents={contents} cameraPosition={cameraPosition}/>
        </Suspense>
      </Canvas>
    </div>
  )
};

export default Stage;

