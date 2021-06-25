import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { useState } from 'react';
import { SideBarData } from './NavbarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    alingn-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavbarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ navbar }) => (navbar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const NavbarWrap = styled.div`
    width: 100%;
`;


const Navbar = () => {

    const [navbar, setNavbar] =  useState(false)

    const showNavbar = () => setNavbar(!navbar)

    return (
        <>
            <IconContext.Provider value={{color: 'white' }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showNavbar} />
                    </NavIcon>
                </Nav>
                <NavbarNav navbar={navbar}>
                    <NavbarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showNavbar} />
                        </NavIcon>
                        {SideBarData.map((item, index) =>{
                            return <SubMenu item={item} key={index} />;
                        })}
                    </NavbarWrap>
                </NavbarNav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
