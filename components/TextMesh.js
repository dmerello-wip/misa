import * as THREE from 'three'
import React, { useMemo, useEffect, useRef } from 'react'
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei'


const TextMesh = ({ children, vAlign = 'center', hAlign = 'center', size = 1, height = 1, color = '#000000', position = [0,0,0] }) => {
  const font = useLoader(THREE.FontLoader, '/fonts/Sail_Regular.json')

  const config = useMemo(() => ({ font, size: size, height: height }), [font, size, height]);
  const mesh = useRef(null);
  const texture = useTexture('/images/ambientTexture.jpg');

    //
    // useEffect(
    //     () => {
    //         console.dir(mesh);
    //         const size = new THREE.Vector3();
    //         mesh.computeBoundingBox()
    //         mesh.boundingBox.getSize(size)
    //         mesh.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    //         mesh.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    //     },
    //     [children]
    // );

  return (
    <mesh ref={mesh} castShadow receiveShadow position={position}>
      <textGeometry attach="geometry" args={[children, config]} />
      <meshBasicMaterial attach="material" color={color} />
      {/*<meshPhysicalMaterial envMapIntensity={1} map={texture} clearcoat={0.9} clearcoatRoughness={1} roughness={1} metalness={1} />*/}
    </mesh>
  )
}


export default TextMesh;