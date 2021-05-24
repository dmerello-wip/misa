import {useRef, useState, useMemo, useEffect} from 'react';
import {Box, Html} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import * as THREE from 'three';

const Work = ({position, initialRotation, picture, id}) => {

  const baseSize = [1, 1, 0.02];

  const horizontalFormatBaseWidth = 1.5;
  const verticalFormatBaseWidth = 1;
  const workMesh = useRef();
  const [size, setSize] = useState(baseSize);
  const absolutePositionInWorld = new THREE.Vector3();
  const inViewRangeX = 3;

  // TEXTURE: load picture as a texture and set proportions for horiz / vert
  const texture = useMemo(() => new THREE.TextureLoader().load(picture, (txtr) => {
    let isHorizontal = (txtr.image.width > txtr.image.height);
    let w = (isHorizontal) ? horizontalFormatBaseWidth : verticalFormatBaseWidth;
    let h = (w * txtr.image.height) / txtr.image.width;
    setSize([w, h, baseSize[2]]);
    return false;
  }, undefined, (error) => {
    return false;
  }), [picture]);

  useFrame(() => {
      workMesh.current.getWorldPosition(absolutePositionInWorld);
      // if obj is in frontal quadrant and if obj is centered in x (for an expected range):
      if(absolutePositionInWorld.z > 0 && -inViewRangeX < absolutePositionInWorld.x < inViewRangeX) {
        // rotate obj y accordingly on how precisely it's centered in x
        workMesh.current.rotation.y = THREE.Math.degToRad( ( 180 / inViewRangeX ) * ( inViewRangeX - absolutePositionInWorld.x ) );
      }
  });

  return (
    <group position={position} rotation={initialRotation}>
      <Html transform>
        {/*<div className="work">*/}
          {/*<div className="work__title">{id}</div>*/}
        {/*</div>*/}
      </Html>
      <Box castShadow ref={workMesh} args={size}>
        <meshStandardMaterial attachArray="material" color="white"/>
        <meshStandardMaterial attachArray="material" color="white"/>
        <meshStandardMaterial attachArray="material" color="white"/>
        <meshStandardMaterial attachArray="material" color="white"/>
        <meshStandardMaterial
          attachArray="material"
          map={texture}
          transparent={true}
        />
        <meshStandardMaterial attachArray="material" color="white"/>
      </Box>
    </group>
  );
};


export default Work;

