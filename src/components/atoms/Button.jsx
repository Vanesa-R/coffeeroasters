import React from "react";
import { useNavigate } from "react-router-dom";

// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";
import colors from "../../styles/theming/colors";
import fonts from "../../styles/theming/fonts";


const ButtonStyle = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    width: fit-content;
    padding: 16px 30px;
    font-family: ${({ theme }) => fonts.title}, serif;
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.4em;
    color: ${({ theme }) => colors.white20};
    background-color: ${({theme}) => colors.cyan};
    border-radius: .5em;

    ${device.laptop`
        &:hover {
            background-color: #66D2CF;
        }

        &:disabled {
            background-color: #E2DEDB;
        }
    `}
`


const Button = ({cta}) => {
    const navigate = useNavigate();

    return (
        <>
            <ButtonStyle 
                onClick={()=>{
                navigate("/plan")}}>
                {cta}
            </ButtonStyle>       
        </>
    )
}

export default Button;