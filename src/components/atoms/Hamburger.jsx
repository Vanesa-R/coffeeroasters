import React from "react";


// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";
import colors from "../../styles/theming/colors";

const HamburgerStyle = styled.button`
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;

    & .icon__line {
        position: absolute;
        display: block;
        width: 26px;
        height: 1.5px;
        background-color: ${({ theme }) => colors.black};


        &:first-child,
        &:last-child {
            will-change: top, transform;
            transition: top 300ms ease 300ms, transform 300ms ease-in-out;
        }

        &:first-child {
                top: 8px;
        }
        &:nth-child(2){
                top: 15.99px;
                transition: background-color 100ms ease 400ms;
        }
        &:last-child {
                top: 24px;
        }
    }

    &.icon__menu--expanded {
        & .icon__line {
            &:first-child,
            &:last-child {
                    top: 16px;
                    will-change: top, transform;
                    transition: top 300ms ease, transform 300ms ease-in-out 300ms;
            }
            &:first-child {
                    transform: rotate(45deg);
            }
            &:nth-child(2) {
                    background-color: transparent;
                    transition: background-color 100ms ease;
            }
            &:last-child {
                    transform: rotate(135deg);
            }
        }
    }

    
    ${device.tablet`
     display:none;
    `}

`

const Hamburger = ({expanded, setExpanded}) => {
    return(
        <>
            <HamburgerStyle 
                className={expanded === true ? "icon__menu icon__menu--expanded" : "icon__menu"}
                aria-controls="menu__primary"
                aria-expanded={expanded}
                aria-label="Expandir menú"
                onClick={()=>{
                    expanded === false ? setExpanded(true) : setExpanded(false)
                }}>

                    {[1,2,3].map((line) => (
                        <span className="icon__line" key={line}></span>
                    ))}

            </HamburgerStyle>
        </>
    )
}

export default Hamburger;