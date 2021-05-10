import {useRef} from "react";
import {PerspectiveCamera, OrbitControls} from '@react-three/drei';

const Camera = ({position}) => {

  const myCamera = useRef();

  return (
    <>
    <PerspectiveCamera ref={myCamera} position={position}/>
    <OrbitControls camera={myCamera.current}/>
    </>
  );
};

export default Camera;

