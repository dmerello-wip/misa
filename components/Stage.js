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
        <color attach="background" args={ambientColor} />
        <fog attach="fog" args={[ambientColor, 0, 30]} />
        <ambientLight castShadow intensity={1}/>
        <spotLight intensity={0.5} position={[-2, 5, 10]} angle={2} penumbra={1} castShadow />
        <spotLight intensity={1} position={[2, 0, 10]} angle={2} penumbra={1} castShadow />
        <spotLight intensity={2} position={[0, 30, 30]} angle={2} penumbra={1} castShadow />
        <Gallery contents={contents} cameraPosition={cameraPosition}/>
        <Camera position={cameraPosition}/>
        <Box args={[1,1,1]} rotation={[0,10,0]} castShadow position={[0,0,0]}/>
        <Floor color={ambientColor}/>
      </Canvas>
    </div>
  )
};


export default Stage;

