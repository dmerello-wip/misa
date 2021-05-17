import {Canvas} from "react-three-fiber";
import Gallery from '@/components/Gallery';
import Camera from '@/components/Camera';
import Floor from '@/components/Floor';

const Stage = ({contents}) => {


  return (
    <div className="stage">
      <Canvas shadowMap>
        <color attach="background" args={"black"} />
        <fog attach="fog" args={["black", 0, 40]} />
        <Gallery contents={contents}/>
        <ambientLight castShadow intensity={1}/>
        <directionalLight
          intensity={0.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <Camera position={[0, 1, -5]}/>
        <Floor/>
      </Canvas>
    </div>
  )
};


export default Stage;

