import React from "react";
import { Link } from "react-router-dom";


// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";

const ListItemStyle = styled.li`
    list-style: none;
    & .list__item__link {
        text-decoration: none;
    }

    
    ${device.tablet`
        text-transform: uppercase;

        &:not(:first-child) {
            margin-left: 32px;
        }
    `}
`


const ListItem = ({title, path, setExpanded }) => {
    
    return (
        <>
            <ListItemStyle
                className="list__item" 
                role="menuitem"
                key={title}>
                <Link 
                    className="list__item__link"
                    to={path}
                    onClick={()=>{
                        // poner setExpanded en false tras un segundo
                    }}>
                    {title}
                    
                </Link>
                
            </ListItemStyle>
  
        </>
    )
}
    


export default ListItem;