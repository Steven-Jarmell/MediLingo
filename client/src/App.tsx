import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import PathComponent from "./components/PathComponent";
import HomeComponent from "./components/HomeComponent";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import HomeLayout from "./components/HomeLayout";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
    useUser,
} from "@clerk/clerk-react";
import { useEffect } from "react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function NavigateToHome() {
    const nav = useNavigate();
    useEffect(() => {
        nav("/home");
    }, []);

    return (
        <>
            <Outlet />
        </>
    );
}

export default function App() {
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <SignedIn>
                                <NavigateToHome />
                            </SignedIn>
                            <SignedOut>
                                <Layout />
                            </SignedOut>
                        </>
                    }
                >
                    <Route index element={<Landing />} />

                    <Route
                        path="/sign-in/*"
                        element={
                            <div className="flex justify-center items-center h-full">
                                <SignIn
                                    routing="path"
                                    path="/sign-in"
                                    redirectUrl="/home"
                                />
                            </div>
                        }
                    />
                    <Route
                        path="/sign-up/*"
                        element={
                            <div className="flex justify-center">
                                <SignUp
                                    routing="path"
                                    path="/sign-up"
                                    redirectUrl="/home"
                                />{" "}
                            </div>
                        }
                    />

                    <Route
                        path="/home"
                        element={
                            <>
                                <SignedIn>
                                    <HomeLayout />
                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn />
                                </SignedOut>
                            </>
                        }
                    >
                        <Route index element={<HomeComponent />} />
                    </Route>

                    <Route path="*" element={<ErrorPage errorCode={404} />} />
                </Route>
            </Routes>
        </ClerkProvider>
    );
}
