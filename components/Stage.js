import {Suspense, useRef, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Box} from "@react-three/drei";
import Gallery from '@/components/Gallery';
import Camera from '@/components/Camera';
import Floor from '@/components/Floor';
import {useRouter} from 'next/router';
import gsap, {TweenMax, Power2} from 'gsap';
import TextMesh from './TextMesh';

const Stage = ({contents, itemClickHandler}) => {

  const router = useRouter();
  const cameraRef = useRef(null);


  const ambientColor = '#141111';
  const radius = contents.length / 2.5;
  const cameraPosition = [0, 2, radius + 6];
  const fogDistance = radius * 1;

  const goToWork = (slug) => {
    animateCamera().then(() => {
      router.push(`/works/${slug}`);
    });
  };

  const animateCamera = () => new Promise((resolve, reject) => {
    let cameraChoords = {
      posY: cameraRef.current.position.y,
      posZ: cameraRef.current.position.z,
      rotX: cameraRef.current.rotation.x,
    };
    let tl = gsap.timeline({
      onUpdate: () => {
        cameraRef.current.position.y = cameraChoords.posY;
        cameraRef.current.position.z = cameraChoords.posZ;
        cameraRef.current.rotation.x = cameraChoords.rotX;
      },
      onComplete: () => {
        resolve()
      }
    });
    tl.to(cameraChoords, {
      posY: 4,
      posZ: cameraChoords.posZ + 3,
      rotX: -Math.PI / 8,
      duration: 1,
      ease: Power2.easeOut
    });
    tl.to(cameraChoords, {
      posZ: 0,
      rotX: -Math.PI / 2,
      duration: 2,
      ease: Power2.easeInOut
    });
  });


  return (
    <div className="stage">
      <Canvas shadows={true} shadowMap>
        <color attach="background" args={ambientColor}/>
        <fog attach="fog" args={[ambientColor, 10, 20]}/>
        <Camera position={cameraPosition} ref={cameraRef}/>
        <ambientLight intensity={1}/>
        /* also spotlight could be managed with radius relation: */
        <spotLight intensity={1} position={[0, 20, radius/2]} angle={1} penumbra={0} castShadow/>
        <Floor color={ambientColor}/>
        <Suspense fallback={null}>
          <Gallery
            contents={contents}
            radius={radius}
            itemClick={goToWork}
          />
          <TextMesh position={[-9,2.2,0]} size={2} height={0} color={'#555'} >Liliana</TextMesh>
          <TextMesh position={[-7,0,0]} size={2} height={0} color={'#555'} >Zaccheroni</TextMesh>
        </Suspense>
      </Canvas>
    </div>
  )
};

export default Stage;

