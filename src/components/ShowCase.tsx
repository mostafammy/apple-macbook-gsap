import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

const ShowCase = () => {
    const rootRef = useRef<HTMLElement>(null);
    const maskRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const reduceMotion = useMediaQuery({query: '(prefers-reduced-motion: reduce)'});

    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});

    useGSAP(() => {
        if (!isTablet && !reduceMotion) {
            const timeline = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: '#showcase',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                        markers: false,
                        pin: true,
                    }
                }
            );
            timeline.to(
                maskRef.current,
                {
                    // transform: 'scale(1.1)',
                    scale: 1.1,
                    ease: 'none'
                }).to(contentRef.current, {
                opacity: 1,
                y: 0,
                ease: 'none'
            })
            return () => {
                timeline.scrollTrigger?.kill();
                timeline.kill();
            };
        }
    }, {dependencies: [isTablet], scope: rootRef});

    return (
        <section ref={rootRef} id={'showcase'}>
            <div className={'media'}>
                <video src={'/videos/game.mp4'} loop={true} muted playsInline autoPlay/>
                <div className={'mask'}>
                    <img ref={maskRef} src={'/mask-logo.svg'} alt={'M4 Mask'}/>
                </div>
            </div>
            <div ref={contentRef} className={'content'}>
                <div className={'wrapper'}>
                    <div className={'lg:max-w-md'}>
                        <h2>Rocket Ship</h2>

                        <div className={'space-y-5 mt-7 pe-10'}>
                            <p>
                                Introducing {" "}
                                <span className={'text-white'}>
                                    M4, the next generation of Apple Silicon
                                </span>
                                . M4 Powers
                            </p>
                            <p>
                                it drives Apple Intelligence On iPad Pro, so you can write, create, and accomplish more
                                with ease. All in a design that's unbelievably thin, light, and powerful.
                            </p>
                            <p>
                                A brand-new display engine delivers breathtaking precision, color accuracy, and
                                brightness. And a next-gen GPU with hardware-accelerated ray tracing brings
                                console-level graphics to your fingertips.
                            </p>
                            <p className={'text-primary'}>
                                Learn more about Apple Intelligence
                            </p>
                        </div>
                    </div>
                    <div className={'max-w-3xs space-y-14'}>
                        <div className={'space-y-2'}>
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>Pro Rendering Performance than M2</p>
                        </div>

                        <div className={'space-y-2'}>
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU Performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowCase
