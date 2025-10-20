import useMacBookStore from "../store";
import clsx from "clsx";
import {Canvas} from "@react-three/fiber";
import StudioLights from "./three/StudioLights.tsx";
import ModelSwitcher from "./three/ModelSwitcher.tsx";
import {useMediaQuery} from "react-responsive";



const ProductViewer = () => {
    const {color, setColor, scale, setScale} = useMacBookStore();

    const isMobile = useMediaQuery({query: '(max-width: 1024px)'});
    return (
        <section id={'product-viewer'}>
            <h2>Take a closer look.</h2>
            <div className={'controls'}>
                <p className={'info'}>
                    Macbook Pro | Available in 14" & 16" in Space Gray & Dark colors
                </p>
                <div className={'flex-center gap-5 mt-5'}>
                    <div className={'color-control'}>
                        <div
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                            onClick={() => setColor('#adb5bd')}
                            title="Silver"
                        ></div>
                        <div
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                            onClick={() => setColor('#2e2c2e')}
                            title="Space Black"
                        ></div>
                    </div>
                    <div className={'size-control'}>
                        <div
                            className={clsx(
                                'cursor-pointer px-4 py-2 transition-colors',
                                scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white '
                            )}
                            onClick={() => setScale(0.06)}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            className={clsx(
                                'cursor-pointer px-4 py-2  transition-colors',
                                scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white '
                            )}
                            onClick={() => setScale(0.08)}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[500px] relative">
                <Canvas
                    camera={{
                        position: [0, 2, 5],
                        fov: 50,
                        near: 0.1,
                        far: 100,
                    }}
                >
                    <StudioLights/>
                    {/*<MacbookModel14 scale={0.06} position={[0, 0, 0]}/>*/}

                    {/*<SceneSetup>*/}
                    {/*    <group scale={[scale, scale, scale]} position={[0, -1, 0]}>*/}
                    {/*        {scale === 0.06 ? (*/}
                    {/*            <MacbookModel14/>*/}
                    {/*        ) : (*/}
                    {/*            <MacbookModel16/>*/}
                    {/*        )}*/}
                    {/*    </group>*/}
                    {/*</SceneSetup>*/}
                    <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile}/>
                </Canvas>
            </div>
        </section>
    )
}
export default ProductViewer
