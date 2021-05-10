import {useRef, useState, useMemo} from 'react';
import * as THREE from 'three';

const Work = ({picture, position, rotation}) => {

  const horizontalFormatBaseWidth = 3;
  const verticalFormatBaseWidth = 1.5;
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
    <>
    <mesh
      ref={mesh}
      position={position}
      rotation={rotation}
    >
      <planeBufferGeometry attach="geometry" args={size}/>
      <meshBasicMaterial
        attach="material"
        map={texture}
        transparent
      />
    </mesh>
    </>
  );
};


export default Work;

