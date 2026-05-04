import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

// ─── Single shooting star ─────────────────────────────────────────────────────
function ShootingStar({ initialDelay = 0 }) {
  const meshRef = useRef()
  const elapsed = useRef(-initialDelay)

  const config = useRef(randomConfig())

  function randomConfig() {
    return {
      startX:   -8 - Math.random() * 3,
      startY:    1.5 + Math.random() * 3.5,
      travelX:   15 + Math.random() * 5,
      travelY:  -(4.5 + Math.random() * 3),
      duration:  1.6 + Math.random() * 0.8,
      pause:     7 + Math.random() * 11,
    }
  }

  useFrame((_, delta) => {
    if (!meshRef.current) return

    elapsed.current += delta

    const { startX, startY, travelX, travelY, duration, pause } = config.current
    const cycle = duration + pause
    const t = ((elapsed.current % cycle) + cycle) % cycle

    if (t < duration) {
      const p = t / duration
      meshRef.current.position.x = startX + p * travelX
      meshRef.current.position.y = startY + p * travelY

      // Ease-in / ease-out opacity
      const fade =
        p < 0.12  ? p / 0.12 :
        p > 0.78  ? (1 - p) / 0.22 :
        1

      meshRef.current.material.opacity = fade * 0.88
      meshRef.current.visible = true
    } else {
      meshRef.current.visible = false
      // Refresh randomness just before the next cycle starts
      if (t > cycle - delta * 3) {
        config.current = randomConfig()
      }
    }
  })

  return (
    <mesh ref={meshRef} visible={false} rotation={[0, 0, -0.42]}>
      {/* Thin elongated plane — the streak */}
      <planeGeometry args={[0.85, 0.01]} />
      <meshBasicMaterial color={0xffffff} transparent opacity={0} />
    </mesh>
  )
}

// ─── Scene contents ───────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <Stars
        radius={80}
        depth={50}
        count={1500}
        factor={2}
        fade
        speed={0.5}
      />
      {/* Four staggered shooting stars — low frequency for a premium feel */}
      <ShootingStar initialDelay={0} />
      <ShootingStar initialDelay={4.8} />
      <ShootingStar initialDelay={10.2} />
      <ShootingStar initialDelay={16.5} />
    </>
  )
}

// ─── Canvas export ────────────────────────────────────────────────────────────
export default function ContactScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      dpr={[1, 1.5]}
      style={{ width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  )
}
