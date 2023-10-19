import { Routes, Route } from "react-router";
import Mockman from "mockman-js";

function App() {
    return (
        <Routes>
            <Route path="/mockman" element={<Mockman />} />
        </Routes>
    );
}

export default App;
