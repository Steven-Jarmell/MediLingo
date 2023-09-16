import { UserButton } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            <UserButton afterSignOutUrl="/" />
            <Outlet />
        </>
    );
};

export default HomeLayout;
