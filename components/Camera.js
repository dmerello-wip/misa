import {useRef} from "react";
import {PerspectiveCamera, OrbitControls} from '@react-three/drei';

const Camera = ({position}) => {

  const myCamera = useRef();

  return (
    <>
    <PerspectiveCamera castShadow
      ref={myCamera}
      position={position}
      makeDefault={true}
    />
    {/*<OrbitControls camera={myCamera.current}/>*/}
    </>
  );
};

export default Camera;

