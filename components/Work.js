import {useRef, useState, useMemo} from 'react';
import {Html, Box} from '@react-three/drei';
import * as THREE from 'three';

const Work = ({picture, title, position, rotation}) => {

  const horizontalFormatBaseWidth = 1.5;
  const verticalFormatBaseWidth = 1;
  const mesh = useRef();
  const [size, setSize] = useState([1, 1]);

  // TEXTURE: load picture as a texture and set proportions for horiz / vert
  const texture = useMemo(() => new THREE.TextureLoader().load(picture, (txtr) => {
    let isHorizontal = (txtr.image.width > txtr.image.height);
    let w = (isHorizontal) ? horizontalFormatBaseWidth : verticalFormatBaseWidth;
    let h = (w * txtr.image.height) / txtr.image.width;
    setSize([w, h]);
    return false;
  }, undefined, (error) => {
    return false;
  }), [picture]);


  return (
    <group position={position} rotation={rotation} castShadow
    >
      <Html transform={true} position={[0,-1.5,0]}>
        <div className="work__title">{title}</div>
      </Html>
      <Plane ref={mesh} castShadow args={size} >
        <meshPhongMaterial
          map={texture}
          side={THREE.DoubleSide}
        />
      </Plane>
    </group>
  );
};


export default Work;

