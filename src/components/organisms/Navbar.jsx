import React from "react";
import { useState } from "react";
import Logo from "../molecules/Logo";
import Menu from "../molecules/Menu";


// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";
import colors from "../../styles/theming/colors";
import fonts from "../../styles/theming/fonts";

const NavbarStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 32px;
    font-family: ${({ theme }) => fonts.title};p
    font-size: 1.4em;

    ${device.tablet`
        margin-top: 40px;
        font-size: .8em;
    `}

    & .list__item {

        &:not(:first-child){
            margin-top: 34px;
            ${device.tablet`
                margin-top: 0;
            `}
        }
        &:first-child {
            margin-top: 130px;
            ${device.tablet`
                margin-top: 0;
            `}
        }


        & .list__item__link {
            font-size: 1.2em;
            line-height: 1.4em;
            font-weight: 700;
            text-transform: capitalize;
            color: ${({ theme }) => colors.black};

            ${device.tablet`
                font-family: Barlow, sans-serif;
                font-size: 12px;
                line-height: 15px;
                letter-spacing: 0.92px;
                text-transform: uppercase;
                color: #83888F;

                &:hover {
                    color: #333D4B;
                }
            `}
        }
    }

`


const Navbar = ({content}) => {
    
    const [expanded, setExpanded] = useState(false)
        
    return (

        <>
            <NavbarStyle className="navbar">
                <Logo 
                    expanded={expanded}/>
                <Menu
                    expanded={expanded}
                    setExpanded={setExpanded}
                    content={content}/>
            </NavbarStyle>

        </>
    )

}



export default Navbar;