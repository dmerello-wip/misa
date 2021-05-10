import {useRef} from 'react';
import {Canvas} from "react-three-fiber";
import * as THREE from 'three';
import Work from '@/components/Work';
import Camera from '@/components/Camera';

const Gallery = ({contents}) => {

  const cameraRef = useRef();
  const radius = 10;

  const renderWorks = () => {
    let baseDegrees = 360 / contents.length;
    return contents.map((el, i) => {
      let x = radius * Math.sin(i * baseDegrees);
      let z = radius * Math.cos(i * baseDegrees);
      //TODO: calculate correct rotation:
      let rot = THREE.Math.degToRad(baseDegrees * i);
      return <Work
        key={`work-${i}`}
        picture={el.picture}
        position={[x, 0, z]}
        rotation={[0, rot, 0]}
      />;
    });
  };


  return (
    <div className="gallery">
      <Canvas>
        {renderWorks()}
        <ambientLight intensity={0.2}/>
        <pointLight intensity={0.1} position={[-3, -4, -1]}/>
        <pointLight intensity={0.1} position={[3, -4, 1]}/>
        <Camera position={[0, 0, 20]}/>
      </Canvas>
    </div>
  )
};


export default Gallery;

