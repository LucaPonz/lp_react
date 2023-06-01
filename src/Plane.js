import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { createNoise3D } from 'simplex-noise'
import alea from 'alea';
import * as THREE from 'three'

function Plane(props) {
    const ref = useRef()
    const prng = alea('seed');
    const noise3D = createNoise3D(prng)
    
    const newColor = new Float32Array(12)
    const attr = new THREE.BufferAttribute(newColor,3)
    function update(positionPlane, time) {
      for (let i = 0; i < (positionPlane.count * 3); i += 3) {
          const x = positionPlane.array[i];
          const y = positionPlane.array[i + 1];
          const z = positionPlane.array[i + 2];
          const noise = (noise3D(x, y, time/2));
          const hue = mapRange(noise, -1, 1, 0, 1);
          const color = new THREE.Color();
          color.setHSL(hue, 0.9, 0.25);
          newColor[i] = color.r;
          newColor[i + 1] = color.g;
          newColor[i + 2] = color.b;
      }
      return newColor
    }
    function mapRange(value, a, b, c, d) {
      value = (value - a) / (b - a);
      return c + value * (d - c);
    }
    
    useFrame(({clock}) => {
      const a = clock.getElapsedTime()
      const pos = ref.current.geometry.getAttribute('position')
      ref.current.geometry.setAttribute('color', attr.set(update(pos,a)))
      ref.current.geometry.attributes.color.needsUpdate = true
    })
    return(
      <mesh
      {...props}
      ref={ref}
      position={[0,0,0]}
      scale={[20,20,0]}>
      <planeGeometry />
      <meshBasicMaterial color='white' vertexColors />
      </mesh>
    )
  }

  export default Plane