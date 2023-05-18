import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const StyledLink = styled(NavLink)`
    font-size: 24px;
    font-family: Montserrat;
    color: #AE7BE3;

    &:not(:last-child) {
        margin-right: 16px;
    };

    &:hover,
    &:focus {
        color: #471CA9;
    };

    &.active {
        color: #471CA9;
        border-bottom: 2px solid #471CA9;
    };
`;
