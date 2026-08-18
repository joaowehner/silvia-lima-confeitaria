import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import CakeFallback from './CakeFallback'

const CAKE_PALETTE = {
  creamBase: '#FFFDF9',
  butterCream: '#FAF3EA',
  warmFrosting: '#EEDBC9',
  caramelDrizzle: '#C4956A',
  roseCream: '#D4A69A',
  goldPearl: '#E5B842',
  richChocolate: '#3B2F2A',
  plateCeramic: '#F5EFEB',
}

function CakeTier({
  position,
  radius,
  height,
  drizzle = false,
}: {
  position: [number, number, number]
  radius: number
  height: number
  drizzle?: boolean
}) {
  return (
    <group position={position}>
      {/* Cake Tier Body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius * 1.01, height, 48]} />
        <meshStandardMaterial
          color={CAKE_PALETTE.creamBase}
          roughness={0.45}
          metalness={0.02}
        />
      </mesh>

      {/* Top Border Piping Ring */}
      <mesh position={[0, height / 2, 0]} castShadow>
        <torusGeometry args={[radius * 0.96, 0.05, 16, 48]} />
        <meshStandardMaterial
          color={CAKE_PALETTE.butterCream}
          roughness={0.3}
          metalness={0.04}
        />
      </mesh>

      {/* Bottom Border Piping Pearls */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2
        const x = Math.cos(angle) * (radius * 1.005)
        const z = Math.sin(angle) * (radius * 1.005)
        return (
          <mesh key={i} position={[x, -height / 2 + 0.03, z]} castShadow>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshStandardMaterial
              color={CAKE_PALETTE.butterCream}
              roughness={0.35}
              metalness={0.05}
            />
          </mesh>
        )
      })}

      {/* Delicate Wave Ribbon Texture in the Middle */}
      {drizzle && (
        <mesh position={[0, 0, 0]} castShadow>
          <torusGeometry args={[radius * 1.008, 0.03, 12, 48]} />
          <meshStandardMaterial
            color={CAKE_PALETTE.caramelDrizzle}
            roughness={0.25}
            metalness={0.1}
          />
        </mesh>
      )}
    </group>
  )
}

function FloralRosette({ position, color, scale = 1 }: {
  position: [number, number, number]
  color: string
  scale?: number
}) {
  return (
    <group position={position} scale={scale}>
      {/* Center berry */}
      <mesh castShadow>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color={CAKE_PALETTE.goldPearl} roughness={0.15} metalness={0.4} />
      </mesh>
      {/* Petals */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2
        const x = Math.cos(angle) * 0.07
        const z = Math.sin(angle) * 0.07
        return (
          <mesh key={i} position={[x, 0.01, z]} rotation={[0.2, angle, 0]} castShadow>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={0.05} />
          </mesh>
        )
      })}
    </group>
  )
}

function CakeStructure() {
  const group = useRef<THREE.Group>(null)
  const prefersReducedMotion = useReducedMotion()

  useFrame((_state, delta) => {
    if (group.current && !prefersReducedMotion) {
      group.current.rotation.y += 0.2 * delta
    }
  })

  return (
    <group ref={group} position={[0, -0.95, 0]}>
      {/* Base Tier (Large) */}
      <CakeTier position={[0, 0.45, 0]} radius={1.25} height={0.75} drizzle />

      {/* Middle Tier (Medium) */}
      <CakeTier position={[0, 1.15, 0]} radius={0.92} height={0.65} drizzle />

      {/* Top Tier (Small) */}
      <CakeTier position={[0, 1.72, 0]} radius={0.62} height={0.5} />

      {/* Cake Crown Decor on Top Tier */}
      <FloralRosette position={[0, 2.05, 0]} color={CAKE_PALETTE.warmFrosting} scale={1.3} />
      <FloralRosette position={[0.25, 2.02, 0.15]} color={CAKE_PALETTE.roseCream} scale={0.9} />
      <FloralRosette position={[-0.22, 2.02, 0.18]} color={CAKE_PALETTE.roseCream} scale={0.9} />
      <FloralRosette position={[0.05, 2.02, -0.25]} color={CAKE_PALETTE.warmFrosting} scale={0.95} />

      {/* Gold Pearls scattered on Top */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const x = Math.cos(angle) * 0.42
        const z = Math.sin(angle) * 0.42
        return (
          <mesh key={i} position={[x, 1.98, z]} castShadow>
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshStandardMaterial color={CAKE_PALETTE.goldPearl} roughness={0.15} metalness={0.5} />
          </mesh>
        )
      })}

      {/* Middle tier side floral cascade */}
      <FloralRosette position={[0.88, 1.45, 0.2]} color={CAKE_PALETTE.roseCream} scale={0.8} />
      <FloralRosette position={[0.82, 1.35, 0.4]} color={CAKE_PALETTE.warmFrosting} scale={0.7} />

      {/* Elegant Ceramic Cake Pedestal / Board */}
      <mesh position={[0, 0.04, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.45, 1.5, 0.08, 48]} />
        <meshStandardMaterial
          color={CAKE_PALETTE.plateCeramic}
          roughness={0.18}
          metalness={0.08}
        />
      </mesh>
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <cylinderGeometry args={[0.8, 1.1, 0.12, 48]} />
        <meshStandardMaterial
          color={CAKE_PALETTE.plateCeramic}
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>
    </group>
  )
}

export default function CakeScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Suspense fallback={<CakeFallback />}>
        <Canvas
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [0, 1.4, 4.4], fov: 38 }}
          style={{ touchAction: 'pan-y' }}
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.12,
            antialias: true,
          }}
        >
          {/* Warm studio lighting for pastry presentation */}
          <ambientLight intensity={0.85} color="#FFFBF5" />

          {/* Key light */}
          <directionalLight
            position={[4, 6, 4]}
            intensity={1.2}
            color="#FFF6EA"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />

          {/* Soft Fill light */}
          <directionalLight
            position={[-4, 3, -2]}
            intensity={0.4}
            color="#FFE8D6"
          />

          {/* Golden accent point light */}
          <pointLight
            position={[0, 3, 2]}
            intensity={0.6}
            color="#E5B842"
            distance={8}
          />

          {/* Soft rim light */}
          <pointLight
            position={[0, 1, -3]}
            intensity={0.5}
            color="#FFFFFF"
            distance={6}
          />

          <CakeStructure />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4.2}
            maxPolarAngle={Math.PI / 2.1}
            rotateSpeed={0.45}
            dampingFactor={0.05}
            enableDamping
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
