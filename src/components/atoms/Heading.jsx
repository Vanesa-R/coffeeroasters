import styled from "styled-components";
import colors from "../../styles/theming/colors";
import fonts from "../../styles/theming/fonts";
import device from "../../styles/responsive/breakpoints";

export const H1 = styled.h1`
    font-family: ${({ theme }) => fonts.title}, serif;
    font-size: 2.6em;
    line-height: 40px;
    font-weight: 900;
    color: ${({ theme }) => colors.white20};
    margin-bottom: 24px;

    ${device.tablet`
        font-size: 48px;
        line-height: 48px;
    `}

    ${device.desktop`
        font-size: 72px;
        line-height: 72px;
        margin-bottom: 32px;
    `}
`


export const H2Gradient = styled.h2`
    margin-bottom: 12px;
    font-family: ${({ theme }) => fonts.title}, serif;
    font-size: 40px;
    line-height: 72px;
    font-weight: 900;
    background: linear-gradient(
        ${({theme}) => colors.grey10},
        ${({theme}) => colors.white10} 75%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${device.tablet`
        font-size: 96px;
        line-height: 72px;
        background: linear-gradient(#acacac, #fff 95%);
        background-clip: text;
        -webkit-background-clip: text;

    `} 

    ${device.desktop`
        font-size: 150px;
    `}
`


export const H2 = styled.h2`
    margin-bottom: 24px;
    font-family: ${({ theme }) => fonts.title}, serif;
    font-size: ${({ small}) => small ? "24px" : "28px" };
    line-height: ${({small}) => small ? "32px" : "28px"};
    font-weight: 900;
    color: ${({ light, medium }) => light ? ({theme}) => colors.white20 
        : medium ? ({theme}) => colors.grey10 : ({theme}) => colors.blue90};
`


export const H3 = styled.h3`
    font-family: ${({ theme }) => fonts.title}, serif;
    font-size: 24px;
    line-height: ${({small}) => small ? "28px" : "32px"};
    font-weight: 900;
    color: ${({ light, medium }) => light ? ({theme}) => colors.white20 
        : medium ? ({theme}) => colors.grey10 : ({theme}) => colors.blue90};

    ${device.tablet`
        font-size: 28px;

    `} 
`