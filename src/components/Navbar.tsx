import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledNavbarItem>
                <StyledLink href="/">
                    <StyledLinkText>Home</StyledLinkText>
                </StyledLink>
            </StyledNavbarItem>
            <StyledNavbarItem>
                <StyledLink href="/admin">
                    <StyledLinkText>Admin</StyledLinkText>
                </StyledLink>
            </StyledNavbarItem>
            <StyledNavbarItem>
                <StyledLink href="/cinema">
                    <StyledLinkText>Cinema</StyledLinkText>
                </StyledLink>
            </StyledNavbarItem>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    padding: 0 1rem;
    height: 4rem;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
    position: relative;
`

const StyledNavbarItem = styled.div`
    display: flex;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
`

const StyledLinkText = styled.span`
    margin-right: 1rem;
`

export default Navbar;