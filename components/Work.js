import {useRef, useState, useMemo} from 'react';
import {useFrame} from '@react-three/fiber';
import {Box} from '@react-three/drei';
import * as THREE from 'three';

const Work = ({picture, position, rotation, id}) => {

  const baseSize = [1, 1, 0.02];

  const horizontalFormatBaseWidth = 1.5;
  const verticalFormatBaseWidth = 1;
  const workMesh = useRef();
  const [size, setSize] = useState(baseSize);



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


  // useFrame((state)=>{
  //     if(id = 1) {
  //       let cameraPosition = new THREE.Vector3(0, 1, 15); // <- todo: get it from state or drilling props
  //       document.querySelector('body').dataset.test = getDistance(workMesh.current.position, cameraPosition);
  //     }
  // });
  //
  //
  // const getDistance = (from, to) => {
  // //UHM, always the same distance.... studia cane
  //   return from.distanceTo(to);
  // };


  return (
      <Box position={position} rotation={rotation} castShadow ref={workMesh} args={size} >
        <meshPhongMaterial
          map={texture}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </Box>
  );
};


export default Work;

