import React, { useMemo } from 'react'
import { Text } from '@react-three/drei'

const TextDrei = ({children, size, color})=> {
  const config = useMemo(
    () => ({
        font: '/fonts/Montserrat-Bold.ttf',
        fontSize: size,
        color: color || 'white' ,
        maxWidth: 10,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "left",
        materialType: "MeshPhongMaterial",
        anchorX: "left",
        anchorY: "center"
      }),
    []
  );

  return (
    <Text
      {...config}
    >
      {children}
    </Text>
  )
}

export default TextDrei;