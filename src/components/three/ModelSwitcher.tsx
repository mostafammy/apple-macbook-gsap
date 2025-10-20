import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import MacbookModel14 from "../models/Macbook-14.tsx";
import MacbookModel16 from "../models/Macbook-16.tsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from 'three';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMesh = (group: THREE.Group | null, opacity: number) => {
    if (!group) return;
    group.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.isMesh) {
            const materials = Array.isArray(mesh.material) 
                ? mesh.material 
                : [mesh.material];
                
            materials.forEach((material) => {
                if (material) {
                    const mat = material as THREE.Material & { transparent?: boolean };
                    mat.transparent = true;
                    gsap.to(mat, {
                        opacity,
                        duration: ANIMATION_DURATION,
                        ease: 'power2.out'
                    });
                }
            });
        }
    });
}

const moveGroup = (group: THREE.Group | null, x: number) => {
    if (!group) return;
    gsap.to(group.position, {
        x,
        duration: ANIMATION_DURATION,
        ease: 'power2.out'
    });
}

const ModelSwitcher = ({scale, isMobile}: { scale: number, isMobile: boolean }) => {
    const smallMcbookRef = useRef(null);
    const largeMcbookRef = useRef(null);

    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(() => {
        if (showLargeMacbook) {

            moveGroup(smallMcbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMcbookRef.current, 0);

            fadeMesh(smallMcbookRef.current, 0);
            fadeMesh(largeMcbookRef.current, 1);

        } else {

            moveGroup(smallMcbookRef.current, 0);
            moveGroup(largeMcbookRef.current, OFFSET_DISTANCE);

            fadeMesh(smallMcbookRef.current, 1);
            fadeMesh(largeMcbookRef.current, 0);

        }
    }, [scale]);

    const presentationControlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        polar: [-Math.PI / 4, Math.PI / 4],
        azimuth: [-Math.PI / 2, Math.PI / 2],
        config: { mass: 1, tension: 0, friction: 26 }
    };
    
    const groupConfig = {
        'data-html2canvas-ignore': true
    };
    
    return (
        <>
            <PresentationControls {...presentationControlsConfig}>
                <group ref={smallMcbookRef} {...groupConfig}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>

            <PresentationControls {...presentationControlsConfig}>
                <group ref={largeMcbookRef} {...groupConfig}>
                    <MacbookModel16 scale={isMobile ? SCALE_LARGE_MOBILE : SCALE_LARGE_DESKTOP} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
