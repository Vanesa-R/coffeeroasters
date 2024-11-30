import styled from "styled-components";
import colors from "../../styles/theming/colors";
import fonts from "../../styles/theming/fonts";
import device from "../../styles/responsive/breakpoints";

export const Text = styled.p`
    font-family: ${({ theme }) => fonts.primary}, sans-serif;
    font-size: 15px;
    line-height: 25px;
    font-weight: 400;
    color: ${({ light }) => light ? ({theme}) => colors.white20 : ({theme}) => colors.blue90};

    ${device.desktop`
        font-size: 16px;
        line-height: 26px;
    `}

`