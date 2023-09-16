import { UserButton } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            <div className="flex justify-center items-center p-4">
                <h1 className="text-center mr-auto ml-auto text-4xl">MediLingo</h1>
                <UserButton afterSignOutUrl="/" />
            </div>
            <Outlet />
        </>
    );
};

export default HomeLayout;
