import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/tweets">Tweets</NavLink>
                </nav>
            </header>
            <main>
                <Suspense fallback={<div>Loading .... </div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
};

export default Layout;