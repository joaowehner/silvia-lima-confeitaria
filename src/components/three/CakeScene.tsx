import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import CakeFallback from './CakeFallback'

/**
 * Artisanal Confectionery Color Palette
 * Creamy, soft, warm, velvety — avoiding artificial plastic or porcelain looks.
 */
const PASTRY_PALETTE = {
  buttercreamBase: '#FAF4EB',    // Warm ivory buttercream
  velvetFrosting: '#F5ECE1',     // Soft chantilly cream
  blushRose: '#E2B8AC',          // Delicate blush sugar flower petals
  softRose: '#ECCDC4',           // Pale blush pink
  goldPearl: '#D4AF37',          // Rich warm gold dragees / pearls
  caramelRibbon: '#C99E75',      // Warm honey-caramel piped accent
  ceramicPlate: '#F8F4EE',       // Off-white artisan ceramic stand
  ceramicGoldRim: '#C59B4B',     // Fine gold ceramic rim
}

function CakeTier({
  position,
  radius,
  height,
  showPipedTexture = false,
}: {
  position: [number, number, number]
  radius: number
  height: number
  showPipedTexture?: boolean
}) {
  return (
    <group position={position}>
      {/* Tier Body (Velvety Buttercream) */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius * 1.008, height, 48]} />
        <meshStandardMaterial
          color={PASTRY_PALETTE.buttercreamBase}
          roughness={0.52}
          metalness={0.01}
        />
      </mesh>

      {/* Top Border Soft Piped Ring (Rotated horizontally) */}
      <mesh position={[0, height / 2, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[radius * 0.98, 0.026, 14, 48]} />
        <meshStandardMaterial
          color={PASTRY_PALETTE.velvetFrosting}
          roughness={0.42}
          metalness={0.02}
        />
      </mesh>

      {/* Bottom Border Piped Sugar Pearls */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2
        const x = Math.cos(angle) * (radius * 1.003)
        const z = Math.sin(angle) * (radius * 1.003)
        return (
          <mesh key={i} position={[x, -height / 2 + 0.022, z]} castShadow>
            <sphereGeometry args={[0.024, 10, 10]} />
            <meshStandardMaterial
              color={PASTRY_PALETTE.velvetFrosting}
              roughness={0.4}
              metalness={0.03}
            />
          </mesh>
        )
      })}

      {/* Subtle Piped Texture Accent (Rotated horizontally) */}
      {showPipedTexture && (
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[radius * 1.005, 0.014, 10, 48]} />
          <meshStandardMaterial
            color={PASTRY_PALETTE.caramelRibbon}
            roughness={0.35}
            metalness={0.08}
          />
        </mesh>
      )}
    </group>
  )
}

function SugarRosette({
  position,
  petalColor,
  scale = 1,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number]
  petalColor: string
  scale?: number
  rotation?: [number, number, number]
}) {
  return (
    <group position={position} scale={scale} rotation={rotation}>
      {/* Golden center pearl */}
      <mesh castShadow>
        <sphereGeometry args={[0.045, 14, 14]} />
        <meshStandardMaterial
          color={PASTRY_PALETTE.goldPearl}
          roughness={0.16}
          metalness={0.65}
        />
      </mesh>

      {/* Handcrafted sugar petals */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2
        const x = Math.cos(angle) * 0.058
        const z = Math.sin(angle) * 0.058
        return (
          <mesh key={i} position={[x, 0.01, z]} rotation={[0.15, angle, 0]} castShadow>
            <sphereGeometry args={[0.042, 10, 10]} />
            <meshStandardMaterial
              color={petalColor}
              roughness={0.48}
              metalness={0.02}
            />
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
      group.current.rotation.y += 0.18 * delta
    }
  })

  return (
    <group ref={group} position={[0, -0.92, 0]}>
      {/* Base Tier (Large) */}
      <CakeTier position={[0, 0.42, 0]} radius={1.18} height={0.68} showPipedTexture />

      {/* Middle Tier (Medium) */}
      <CakeTier position={[0, 1.05, 0]} radius={0.86} height={0.58} showPipedTexture />

      {/* Top Tier (Small) */}
      <CakeTier position={[0, 1.58, 0]} radius={0.56} height={0.48} />

      {/* ─── Top Tier Floral Bouquet Crown ─── */}
      <SugarRosette
        position={[0, 1.88, 0]}
        petalColor={PASTRY_PALETTE.velvetFrosting}
        scale={1.2}
      />
      <SugarRosette
        position={[0.18, 1.86, 0.12]}
        petalColor={PASTRY_PALETTE.blushRose}
        scale={0.85}
        rotation={[0.1, 0.3, 0]}
      />
      <SugarRosette
        position={[-0.16, 1.86, 0.14]}
        petalColor={PASTRY_PALETTE.softRose}
        scale={0.85}
        rotation={[0.1, -0.4, 0]}
      />
      <SugarRosette
        position={[0.03, 1.86, -0.18]}
        petalColor={PASTRY_PALETTE.velvetFrosting}
        scale={0.9}
        rotation={[-0.1, 0, 0]}
      />

      {/* Golden Sugar Pearls scattered delicately on Top Tier */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const x = Math.cos(angle) * 0.38
        const z = Math.sin(angle) * 0.38
        return (
          <mesh key={i} position={[x, 1.83, z]} castShadow>
            <sphereGeometry args={[0.022, 10, 10]} />
            <meshStandardMaterial
              color={PASTRY_PALETTE.goldPearl}
              roughness={0.16}
              metalness={0.65}
            />
          </mesh>
        )
      })}

      {/* Delicate Floral Cascade on Tier Side */}
      <SugarRosette
        position={[0.78, 1.34, 0.22]}
        petalColor={PASTRY_PALETTE.blushRose}
        scale={0.75}
        rotation={[0.2, 0.8, 0]}
      />
      <SugarRosette
        position={[0.72, 1.25, 0.38]}
        petalColor={PASTRY_PALETTE.softRose}
        scale={0.65}
        rotation={[0.3, 1.1, 0]}
      />

      {/* ─── Ceramic Cake Stand Pedestal with Gold Rim ─── */}
      <mesh position={[0, 0.04, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.38, 1.42, 0.07, 48]} />
        <meshStandardMaterial
          color={PASTRY_PALETTE.ceramicPlate}
          roughness={0.22}
          metalness={0.04}
        />
      </mesh>
      {/* Gold Rim on Stand (Rotated horizontally) */}
      <mesh position={[0, 0.075, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[1.37, 0.012, 10, 48]} />
        <meshStandardMaterial
          color={PASTRY_PALETTE.ceramicGoldRim}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
      {/* Stand Base */}
      <mesh position={[0, -0.04, 0]} receiveShadow>
        <cylinderGeometry args={[0.75, 1.0, 0.1, 48]} />
        <meshStandardMaterial
          color={PASTRY_PALETTE.ceramicPlate}
          roughness={0.28}
          metalness={0.03}
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
          camera={{ position: [0, 1.22, 4.3], fov: 35 }}
          style={{ touchAction: 'pan-y' }}
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.14,
            antialias: true,
          }}
        >
          {/* Warm studio ambient light */}
          <ambientLight intensity={0.9} color="#FAF3E8" />

          {/* Warm Key light */}
          <directionalLight
            position={[3.5, 5.5, 3.5]}
            intensity={1.25}
            color="#FFF6EC"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />

          {/* Soft Rose/Gold Fill light */}
          <directionalLight
            position={[-3.5, 2.8, -2]}
            intensity={0.45}
            color="#FFEAD8"
          />

          {/* Top golden sparkle highlight */}
          <pointLight
            position={[0, 2.8, 1.8]}
            intensity={0.55}
            color="#EAC160"
            distance={7}
          />

          <CakeStructure />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4.4}
            maxPolarAngle={Math.PI / 2.15}
            rotateSpeed={0.42}
            dampingFactor={0.06}
            enableDamping
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
