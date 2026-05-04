import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ─── Soft radial gradient texture for blurred star look ──────────────────────
function createStarTexture() {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0,   'rgba(255,255,255,1)')
  grad.addColorStop(0.25,'rgba(255,255,255,0.85)')
  grad.addColorStop(0.6, 'rgba(255,255,255,0.3)')
  grad.addColorStop(1,   'rgba(255,255,255,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}

// ─── Subtle grid plane ───────────────────────────────────────────────────────
function GridPlane() {
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return
    const mats = Array.isArray(ref.current.material)
      ? ref.current.material
      : [ref.current.material]
    mats.forEach((m) => {
      m.transparent = true
      m.opacity = 0.55
    })
  }, [])

  return (
    <gridHelper
      ref={ref}
      args={[20, 40, '#888888', '#555555']}
      position={[0, -2.5, 0]}
    />
  )
}

// ─── Interactive + autonomously drifting star particles ──────────────────────
// 400 stars (halved from 800) — same visual density, half the CPU
const STAR_COUNT = 400

function InteractiveStars() {
  const geoRef = useRef()
  const starTexture = useMemo(() => createStarTexture(), [])

  const { positions, origins } = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3)
    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
    }
    return { positions, origins: new Float32Array(positions) }
  }, [])

  useEffect(() => {
    if (geoRef.current) {
      geoRef.current.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      )
    }
  }, [positions])

  useFrame(({ pointer, clock }) => {
    if (!geoRef.current) return
    const attr = geoRef.current.attributes.position
    if (!attr) return

    // Single global wind: 2 sin/cos calls instead of 800×2=1600 per frame
    const t = clock.elapsedTime
    const windX = Math.sin(t * 0.15) * 0.35
    const windY = Math.cos(t * 0.11) * 0.25

    for (let i = 0; i < STAR_COUNT; i++) {
      const targetX = origins[i * 3]     + pointer.x * 0.2 + windX
      const targetY = origins[i * 3 + 1] + pointer.y * 0.2 + windY

      attr.array[i * 3]     += (targetX - attr.array[i * 3])     * 0.022
      attr.array[i * 3 + 1] += (targetY - attr.array[i * 3 + 1]) * 0.022
    }
    attr.needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry ref={geoRef} />
      <pointsMaterial
        size={0.18}
        map={starTexture}
        transparent
        opacity={0.92}
        sizeAttenuation
        alphaTest={0.01}
        depthWrite={false}
      />
    </points>
  )
}

// ─── Scene root (stars + grid only — sphere is CSS/Framer Motion) ────────────
export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
    >
      <GridPlane />
      <InteractiveStars />
    </Canvas>
  )
}

