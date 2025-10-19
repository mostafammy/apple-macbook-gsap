import type {JSX} from "react";
import NavBar from "./components/NavBar.tsx";

export const App = (): JSX.Element => {
    return (
        <main>
            <NavBar/>
        </main>
    );
}
export default App;