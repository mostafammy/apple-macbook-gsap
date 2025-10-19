import type {JSX} from "react";
import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";

export const App = (): JSX.Element => {
    return (
        <main>
            <NavBar/>
            <Hero/>
        </main>
    );
}
export default App;