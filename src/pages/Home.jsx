import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from '../models/Model'
import Loader from '../components/Loader'
import Sky from '../models/Sky'
import Robloxian from '../models/Robloxian'

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [isCentered, setIsCentered] = useState(false);
    const adjustForScreen = () => {
        let screenScale = [1, 1, 1];
        let screenPosition = [0
            , 0, -5];
        let sceneRotation = [0, 1.5, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        }

        return [screenScale, screenPosition, sceneRotation];

    }

    const [sceneScale, scenePosition, sceneRotation] = adjustForScreen();

    return (
        <section className='w-full h-screen relative'>
            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={1} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Robloxian position={scenePosition} isRotating={isRotating} setIsRotating={setIsRotating} isCentered={isCentered} setIsCentered={setIsCentered} />
                </Suspense>
            </Canvas>

        </section>

    )
}

export default Home