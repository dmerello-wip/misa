import {Canvas} from "@react-three/fiber";
import Gallery from '@/components/Gallery';
import Camera from '@/components/Camera';
import Floor from '@/components/Floor';

const Stage = ({contents}) => {

  const ambientColor = '#000';
  const cameraPosition = [0, 1, 15];

  return (
    <div className="stage">
      <Canvas shadowMap>
        <color attach="background" args={ambientColor} />
        <fog attach="fog" args={[ambientColor, 0, 30]} />
        <ambientLight castShadow intensity={1}/>
        <spotLight intensity={3} position={[2, 5, 15]} angle={0.4} penumbra={1} castShadow />
        <spotLight intensity={3} position={[-2, 5, 15]} angle={0.4} penumbra={1} castShadow />
        <Gallery contents={contents} cameraPosition={cameraPosition}/>
        <Camera position={cameraPosition}/>
        <Floor color={ambientColor}/>
      </Canvas>
    </div>
  )
};


export default Stage;

