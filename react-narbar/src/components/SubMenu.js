import { isTemplateElement } from '@babel/types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarLink = styled(Link)`
 display: flex;
 color: #e1e9fc;
 justify-content: space-between;
 align-items: center;
 padding: 20px;
 list-style: none;
 height: 60px;
 text-decoration: none;
 font-size: 18px;

 &:hover{
     bacground: #252831;
     border-left: 1px solid #632ce4;
     
 }
`;

const NavbarLabel = styled.span`
 margin-left: 16px;
`;

const DropdownLink = styled(Link)`
 background: #414757;
 height: 60px;
 padding-left: 3rem;
 display: flex;
 align-items: center;
 text-decorations: none;
 color: #f5f5f5;
 font-size: 18px;
`;

const SubMenu = ({ item }) =>{
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return(
        <>
            <NavbarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <NavbarLabel>{item.title}</NavbarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </NavbarLink>
            {subnav && item.subNav.map((item,index) =>{
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <NavbarLabel>{item.title}</NavbarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu