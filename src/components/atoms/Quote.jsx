import React from "react";

// Styles
import styled from "styled-components";
import fonts from "../../styles/theming/fonts";
import colors from "../../styles/theming/colors";

const BlockquoteStyle = styled.blockquote`
    font-family: ${({theme}) => fonts.title};
    font-weight: 900;
    font-size: ${({theme}) => fonts.size3};
    color: ${({ theme }) => colors.white10};

    & .order__value {
        color: ${({ theme }) => colors.cyan};
    }
`

const Quote = ({text}) =>(
    
    <>
        <BlockquoteStyle className="blockquote">
            {text}
        </BlockquoteStyle>
    </>
)

export default Quote;