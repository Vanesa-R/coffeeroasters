import React from "react";
import Hamburger from "../atoms/Hamburger";

// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";
import ListItem from "../atoms/ListItem";

const MenuStyle = styled.ul`
    position: fixed;
    inset: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: translateY(-100%);
    will-change: transform;
    transition: transform 700ms ease-in-out 300ms;
    background-image: linear-gradient(to bottom,  #fefcf7 60%, transparent);
    &.navbar__list--expanded {
        transform: translateY(0);
    }

    
    ${device.tablet`
     position: static;
     flex-direction: row;
     justify-content: flex-end;
     background-color: transparent;
     transform: translateY(0)
    `}

`

const Menu = ({expanded, setExpanded, content }) => {
    return (
        <>
            <MenuStyle 
                className={expanded === true ? "navbar__list navbar__list--expanded" : "navbar__list"}
                role="menu">

                {content.map(data => (
                    data.navigation.map(item => (
                        
                        <ListItem
                            key={item.title}
                            path={item.path}
                            title={item.title}>
                        </ListItem>

                    ))
                ))}

            </MenuStyle>

            <Hamburger
                expanded={expanded}
                setExpanded={setExpanded}/>
        </>
    )
}

export default Menu;