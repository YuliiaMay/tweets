import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Container } from "./Layout.styled";
import { Logo } from "./Logo/Logo";
import Nav from "./Nav/Nav";


const Layout = () => {
    return (
        <>
            <Header>
                <Container>
                    <Logo/>
                    <Nav/>
                </Container>
                
            </Header>
            <main>
                <Suspense fallback={<div>Loading .... </div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
};

export default Layout;