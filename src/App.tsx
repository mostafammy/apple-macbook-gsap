import type {JSX} from "react";
import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShowCase from "./components/ShowCase.tsx";
import Performance from "./components/Performance.tsx";

gsap.registerPlugin(ScrollTrigger);

export const App = (): JSX.Element => {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <ProductViewer/>
            <ShowCase/>
            <Performance/>
        </main>
    );
}
export default App;