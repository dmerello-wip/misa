import {useRef, forwardRef, useEffect} from "react";
import {PerspectiveCamera, OrbitControls} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import config from '../config';

const Camera = ({position}, ref) => {

  //   const forceDecellerationFactor = 0.7;
  //   const powerFactor = 0.0001;
  //   const speed = useRef(0);
  //   const direction = useRef('forward');
  //
  // useFrame((state)=>{
  //     // set the new rotation:
  //     state.camera.rotation.y -= powerFactor * speed.current;
  //
  //     // decrement the force
  //     direction.current = (speed.current > 0) ? 'forward' : 'back';
  //     speed.current = (direction.current === 'forward') ? Math.floor(speed.current * forceDecellerationFactor) : Math.ceil(speed.current * forceDecellerationFactor);
  // });
  //
  // const onMouseMove = (event)=>{
  //   speed.current =  event.movementX
  // };
  //
  //
  // useEffect(() => {
  //     let scrollTgtElement = document.querySelector(config.stageSelector);
  //     scrollTgtElement.addEventListener('mousemove', onMouseMove);
  // }, []);


    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.y +=  Math.sin(t/2) * 0.0002;
        ref.current.rotation.x -=  Math.sin(t/2) * 0.0002;
    });

    return (
    <>
    <PerspectiveCamera castShadow
      ref={ref}
      position={position}
      makeDefault={true}
    />
    {/*<OrbitControls camera={myCamera.current}/>*/}
    </>
  );
};

export default forwardRef(Camera);

