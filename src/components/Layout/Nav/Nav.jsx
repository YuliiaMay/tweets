import { StyledLink } from "./Nav.styled";


const Nav = () => {
    return (
        <>
            <nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/tweets">Tweets</StyledLink>
            </nav>
        </>

    )

};

export default Nav;