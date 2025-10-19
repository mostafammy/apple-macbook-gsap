import {useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import MacbookModel14 from "../models/Macbook-14.tsx";
import MacbookModel16 from "../models/Macbook-16.tsx";


const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const ModelSwitcher = ({scale, isMobile}: {scale: number, isMobile: boolean}) => {
    const smallMcbookRef = useRef(null);
    const largeMcbookRef = useRef(null);

    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    const ControlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass: 1, tension: 0, friction: 26}
    }
    return (
        <>
            <PresentationControls>
                <group ref={smallMcbookRef} {...ControlsConfig}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06}/>
                </group>
            </PresentationControls>

            <PresentationControls>
                <group ref={largeMcbookRef} {...ControlsConfig}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08}/>
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
