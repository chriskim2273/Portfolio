/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: rogerreyes582 (https://sketchfab.com/rogerreyes582)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/steve-minecraft-c9c8e2e1a9cd49ae828c323aae17ee6f
Title: Steve - Minecraft
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import steveScene from '../assets/3d/steve.glb'

const Steve = ({ currentAnimation, ...props }) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(steveScene);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        Object.values(actions).forEach((action) => action.stop());
        let animation = currentAnimation === "walk" ? "ArmatureAction" : currentAnimation;
        if (actions[animation]) {
            actions[animation].play();
        }
    }, [actions, currentAnimation])

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Armature_23">
                                <group name="GLTF_created_0">
                                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                                    <skinnedMesh
                                        name="Object_9"
                                        geometry={nodes.Object_9.geometry}
                                        material={materials.Material}
                                        skeleton={nodes.Object_9.skeleton}
                                    />
                                    <group name="Herobrine_22" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

export default Steve;