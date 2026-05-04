import { motion as Motion } from 'motion/react'

export default function GlowingSphere() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        right:  'clamp(-200px, -14vw, -80px)',
        bottom: 'clamp(-280px, -30vh, -140px)',
        width:  'clamp(640px, 82vw, 1080px)',
        height: 'clamp(640px, 82vw, 1080px)',
        // Blur the entire sphere — soft, dreamy
        filter: 'blur(14px)',
      }}
    >
      {/* ── 1. Wide diffuse atmospheric halo ───────────────────────── */}
      <Motion.div
        className="absolute rounded-full"
        style={{
          inset: '-20%',
          background:
            'radial-gradient(circle, rgba(90,140,255,0.28) 0%, rgba(60,110,230,0.14) 38%, rgba(180,200,255,0.06) 60%, transparent 72%)',
          filter: 'blur(70px)',
          willChange: 'opacity',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── 2. Sphere body — blue-to-silver radial gradient ────────── */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 35% 28%, #c8d8f8 0%, #7aa0e8 18%, #2c5bcf 42%, #0f1a4a 68%, #060b1e 100%)',
        }}
      />

      {/* ── 3. Silver sheen overlay (upper-left specular band) ─────── */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at 30% 22%, rgba(230,238,255,0.55) 0%, rgba(190,215,255,0.18) 30%, transparent 55%)',
        }}
      />

      {/* ── 4. Rim glow — silver-blue Fresnel edge ─────────────────── */}
      <Motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 44%, rgba(140,175,255,0.10) 60%, rgba(175,205,255,0.30) 76%, rgba(200,220,255,0.55) 90%, rgba(220,235,255,0.70) 100%)',
          willChange: 'opacity',
        }}
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── 5. Pulsing outer glow — opacity-only (compositor, no repaint) ── */}
      <Motion.div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            '0 0 90px 26px rgba(100,155,255,0.22), 0 0 180px 70px rgba(80,130,250,0.12), 0 0 320px 130px rgba(60,110,225,0.06)',
          willChange: 'opacity',
        }}
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
