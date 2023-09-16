import { Route, Routes } from "react-router-dom";
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
} from "@clerk/clerk-react";
import LessonComponent from "./components/LessonComponent";
import Research from "./components/Research";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

export default function App() {
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />

                    <Route
                        path="/sign-in/*"
                        element={
                            <div className="flex justify-center align-middle mt-10">
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
                            <div className="flex justify-center mt-4">
                                <SignUp
                                    routing="path"
                                    path="/sign-up"
                                    redirectUrl="/home"
                                />
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
                        <Route path="path">
                            <Route
                                path=":condition"
                                element={<PathComponent />}
                            />
                        </Route>

                        <Route path="lesson">
                            <Route path=":id" element={<LessonComponent />} />
                        </Route>

                        <Route path="research" element={<Research />} />
                    </Route>

                    <Route path="*" element={<ErrorPage errorCode={404} />} />
                </Route>
            </Routes>
        </ClerkProvider>
    );
}
