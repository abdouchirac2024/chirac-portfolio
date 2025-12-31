import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Outlines } from "./Outlines"
import { Environment, useTexture, OrbitControls } from "@react-three/drei"
import { Physics, useSphere } from "@react-three/cannon"
import { useControls } from "leva"

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const baubleMaterial = new THREE.MeshStandardMaterial({
    color: "white",
    roughness: 0.2,
    metalness: 0.8,
    envMapIntensity: 1
})

export const Sphere3DGallery = () => (
    <div style={{ width: "100%", height: "100vh" }}>
        <Canvas
            shadows
            gl={{ antialias: true }}
            dpr={[1, 2]}
            camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
        >
            <color attach="background" args={["#dfdfdf"]} />
            <ambientLight intensity={0.5} />
            <spotLight
                intensity={1}
                angle={0.2}
                penumbra={1}
                position={[30, 30, 30]}
                castShadow
                shadow-mapSize={[512, 512]}
            />
            <directionalLight position={[-10, 10, 5]} intensity={0.5} />
            <Physics gravity={[0, 2, 0]} iterations={10}>
                <Pointer />
                <Clump />
            </Physics>
            <Environment preset="city" />
            <OrbitControls enableZoom={true} enablePan={true} />
        </Canvas>
    </div>
)

function Clump({
    mat = new THREE.Matrix4(),
    vec = new THREE.Vector3(),
    ...props
}) {
    const { outlines, sphereCount } = useControls({
        outlines: { value: 0.02, step: 0.01, min: 0, max: 0.05 },
        sphereCount: { value: 40, step: 5, min: 10, max: 100 }
    })

    // Use one of the uploaded images as texture
    const texture = useTexture("/images/3d/sphere1.png")

    const [ref, api] = useSphere(() => ({
        args: [1],
        mass: 1,
        angularDamping: 0.1,
        linearDamping: 0.65,
        position: [rfs(20), rfs(20), rfs(20)]
    }))

    useFrame(() => {
        for (let i = 0; i < sphereCount; i++) {
            // Get current whereabouts of the instanced sphere
            ref.current.getMatrixAt(i, mat)
            // Normalize the position and multiply by a negative force.
            // This is enough to drive it towards the center-point.
            api
                .at(i)
                .applyForce(
                    vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(),
                    [0, 0, 0]
                )
        }
    })

    return (
        <instancedMesh
            ref={ref}
            castShadow
            receiveShadow
            args={[sphereGeometry, baubleMaterial, sphereCount]}
            material-map={texture}
        >
            <Outlines thickness={outlines} color="black" />
        </instancedMesh>
    )
}

function Pointer() {
    const viewport = useThree((state) => state.viewport)
    const [ref, api] = useSphere(() => ({
        type: "Kinematic",
        args: [3],
        position: [0, 0, 0]
    }))

    useFrame((state) =>
        api.position.set(
            (state.mouse.x * viewport.width) / 2,
            (state.mouse.y * viewport.height) / 2,
            0
        )
    )

    return (
        <mesh ref={ref} scale={0.2}>
            <sphereGeometry />
            <meshBasicMaterial color={[4, 4, 4]} toneMapped={false} />
            <pointLight intensity={8} distance={10} color="#ffffff" />
        </mesh>
    )
}
