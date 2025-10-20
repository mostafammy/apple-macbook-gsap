import type {JSX} from "react";
import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShowCase from "./components/ShowCase.tsx";

gsap.registerPlugin(ScrollTrigger);

export const App = (): JSX.Element => {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <ProductViewer/>
            <ShowCase/>
        </main>
    );
}
export default App;