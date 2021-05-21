import {useRef, useState, useMemo, useEffect} from 'react';
import {Box, Html} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import * as THREE from 'three';

const Work = ({picture, position, rotation, id, cameraPosition, title}) => {

  const baseSize = [1, 1, 0.02];

  const horizontalFormatBaseWidth = 1.5;
  const verticalFormatBaseWidth = 1;
  const workMesh = useRef();
  const [size, setSize] = useState(baseSize);
  const cameraVector3 = new THREE.Vector3(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
  const absolutePositionInWorld= new THREE.Vector3();

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

  useFrame(()=>{
      if(id = 1) {
        workMesh.current.getWorldPosition(absolutePositionInWorld);
        if(absolutePositionInWorld) {
          document.querySelector('body').dataset.distance = Math.ceil(getDistance(absolutePositionInWorld, cameraVector3));
        }
      }
  });

  const getDistance = (from, to) => {
  //UHM, always the same distance.... studia cane
    return from.distanceTo(to);
  };


  return (
      <Box position={position} rotation={rotation} castShadow ref={workMesh} args={size} >
        <Html transform>
        <h2>{title}</h2>
        </Html>
        <meshPhongMaterial
          map={texture}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </Box>
  );
};


export default Work;

