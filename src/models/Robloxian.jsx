/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three"
import * as THREE from 'three'

import RobloxianModel from '../assets/3d/roblox_noob.glb'

const Robloxian = ({ isRotating, setIsRotating, currentStage, setCurrentStage, ...props }) => {
    const robloxianRef = useRef();
    const { nodes, materials } = useGLTF(RobloxianModel);
    const { gl, viewport } = useThree();
    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }
    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }
    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;
            robloxianRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown)
        canvas.addEventListener('pointerup', handlePointerUp)
        canvas.addEventListener('pointermove', handlePointerMove)

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown)
            canvas.removeEventListener('pointerup', handlePointerUp)
            canvas.removeEventListener('pointermove', handlePointerMove)
        }

    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

    useFrame(({ clock }) => {
        robloxianRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        if (!isRotating) {
            robloxianRef.current.rotation.y += 0.003 * Math.PI;
            if (currentStage === 2) {
                robloxianRef.current.rotation.y += 0.006 * Math.PI;
            }
            rotationSpeed.current *= dampingFactor;

            const rotation = robloxianRef.current.rotation.y;

            /**
             * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
             * The goal is to ensure that the rotation value remains within a specific range to
             * prevent potential issues with very large or negative rotation values.
             *  Here's a step-by-step explanation of what this code does:
             *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
             *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
             *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
             *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
             *     This is done to ensure that the value remains positive and within the range of
             *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
             *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
             *     modulo operation to the value obtained in step 2. This step guarantees that the value
             *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
             *     circle in radians.
             */
            const normalizedRotation =
                ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            //console.log(normalizedRotation);
            // Set the current stage based on the island's orientation
            switch (true) {
                case normalizedRotation >= 0.25 && normalizedRotation <= 2.75:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(2);
                    break;
            }
        }
    })


    return (
        <a.group ref={robloxianRef} {...props} >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.Object_3.geometry}
                    material={materials.N00b1Mtl}
                    position={[-0.6, -2, -2.4]}
                />
            </group>
        </a.group>
    );
}

export default Robloxian