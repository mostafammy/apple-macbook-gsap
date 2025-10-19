import type {JSX} from "react";
import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";

export const App = (): JSX.Element => {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <ProductViewer/>
        </main>
    );
}
export default App;