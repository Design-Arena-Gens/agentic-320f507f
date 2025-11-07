'use client'

import { useRef } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

export default function CoffeeCup() {
  const cupRef = useRef<Mesh>(null)
  const saucerRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (cupRef.current) {
      cupRef.current.rotation.y += 0.002
    }
  })

  return (
    <group>
      {/* Coffee liquid */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.1, 32]} />
        <MeshDistortMaterial
          color="#3d2817"
          speed={2}
          distort={0.1}
          radius={1}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      {/* Cup body */}
      <mesh ref={cupRef} position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[1, 0.7, 1.8, 32]} />
        <meshStandardMaterial
          color="#f5f5f5"
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>

      {/* Cup handle */}
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.5, 0.1, 16, 32, Math.PI]} />
        <meshStandardMaterial
          color="#f5f5f5"
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>

      {/* Saucer */}
      <mesh ref={saucerRef} position={[0, -1.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
        <meshStandardMaterial
          color="#e8e8e8"
          metalness={0.1}
          roughness={0.3}
        />
      </mesh>

      {/* Steam effect */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          emissive="#ffffff"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0.2, 2, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.05}
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  )
}
