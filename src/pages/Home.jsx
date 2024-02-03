import React, { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from '../models/Model'
import Loader from '../components/Loader'
import Sky from '../models/Sky'
import Robloxian from '../models/Robloxian'
import ChatBox from '../components/ChatBox'
import { Link } from 'react-router-dom'
import { socialLinks } from '../constants'

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(null);
    const adjustForScreen = () => {
        let screenScale = [1, 1, 1];
        let screenPosition = [0, 0, -6];
        let sceneRotation = [0, 1.5, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        }

        return [screenScale, screenPosition, sceneRotation];
    }

    const [sceneScale, scenePosition, sceneRotation] = adjustForScreen();

    return (
        <section className='w-full h-screen relative'>
            <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <ChatBox currentStage={currentStage} />}
            </div>
            <div className='absolute top-64 mt-80 left-0 right-0 z-10 rounded-3xl border-black w-fit m-auto'>
                <div className='flex justify-center items-center gap-24'>
                    <Link to={socialLinks[1].link} target="_blank" rel="noopener noreferrer" className='front-semibold text-blue-600 drop-shadow-xl'>
                        <img
                            src={socialLinks[1].iconUrl}
                            alt="github"
                            className='h-14 w-14 object-contain' />
                    </Link>
                    <Link to={socialLinks[2].link} target="_blank" rel="noopener noreferrer" className='front-semibold text-blue-600 drop-shadow-xl'>
                        <img
                            src={socialLinks[2].iconUrl}
                            alt="github"
                            className='h-14 w-14 object-contain' />
                    </Link>
                    <Link to={socialLinks[0].link} target="_blank" rel="noopener noreferrer" className='front-semibold text-blue-600 drop-shadow-xl'>
                        <img
                            src={socialLinks[0].iconUrl}
                            alt="github"
                            className='h-14 w-14 object-contain' />
                    </Link>
                </div>
            </div>
            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={1} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Robloxian position={scenePosition} isRotating={isRotating} setIsRotating={setIsRotating} currentStage={currentStage} setCurrentStage={setCurrentStage} />
                </Suspense>
            </Canvas>
            <p>Nothing to see here :)</p>

        </section>

    )
}

export default Home