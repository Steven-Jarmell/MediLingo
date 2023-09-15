import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import PathComponent from "./components/PathComponent";
import HomeComponent from "./components/HomeComponent";
import SignupComponent from "./components/SignupComponent";
import LoginComponent from "./components/LoginComponent";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<SignupComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/path">
                <Route path=":id" element={<PathComponent />} />
            </Route>
        </Routes>
    );
}
