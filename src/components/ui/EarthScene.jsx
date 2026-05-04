import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

// jsDelivr CDN — reliable CORS-enabled, pinned to r175
const EARTH_TEXTURE_URL =
  'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r175/examples/textures/planets/earth_atmos_2048.jpg'

function Earth() {
  const innerRef = useRef()
  const [earthTexture, setEarthTexture] = useState(null)

  useEffect(() => {
    let loaded = null
    const loader = new THREE.TextureLoader()
    loader.load(
      EARTH_TEXTURE_URL,
      (tex) => { loaded = tex; setEarthTexture(tex) },
      undefined,
      (err) => console.warn('[EarthScene] texture failed to load:', err)
    )
    return () => { loaded?.dispose() }
  }, [])

  useFrame((_, delta) => {
    if (innerRef.current) {
      innerRef.current.rotation.y += delta * 0.045
    }
  })

  return (
    // Outer group: static position + axial tilt (~23.5°)
    <group position={[1.5, -0.1, 0]} rotation={[0.41, 0, 0.1]}>
      {/* Inner group: driven Y rotation */}
      <group ref={innerRef}>
        {/* Earth sphere */}
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            map={earthTexture || null}
            color={earthTexture ? '#ffffff' : '#1a3a6b'}
            metalness={0.4}
            roughness={0.7}
          />
        </mesh>

        {/* Futuristic gridlines overlay */}
        <mesh>
          <sphereGeometry args={[1.01, 32, 32]} />
          <meshBasicMaterial
            wireframe
            color="#4f46e5"
            transparent
            opacity={0.12}
          />
        </mesh>
      </group>
    </group>
  )
}

export default function EarthScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* No fog — it hides stars which live at radius=50 */}

      {/* Ambient fill */}
      <ambientLight intensity={0.25} />
      {/* Sun — warm directional from upper-right */}
      <directionalLight position={[5, 3, 5]} intensity={1.1} color="#fff8e7" />
      {/* Cool rim from opposite side */}
      <pointLight position={[-4, -2, -4]} intensity={0.15} color="#8080ff" />

      {/* Minimal star field — kept outside Suspense so it always renders */}
      <Stars
        radius={50}
        depth={20}
        count={1000}
        factor={2}
        saturation={0}
        fade
      />

      {/* Earth is self-loading; Suspense only guards concurrent asset reads */}
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  )
}
