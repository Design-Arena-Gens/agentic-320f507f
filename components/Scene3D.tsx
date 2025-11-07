'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import CoffeeCup from './CoffeeCup'
import styles from './Scene3D.module.css'

export default function Scene3D() {
  return (
    <section className={styles.scene3d}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Experience in 3D</h2>
          <p className={styles.description}>
            Immerse yourself in our virtual cafe. Rotate and explore our signature coffee cup in full 3D glory.
          </p>
        </div>
        <div className={styles.canvasContainer}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Suspense fallback={null}>
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <CoffeeCup />
              </Float>
              <Environment preset="sunset" />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
