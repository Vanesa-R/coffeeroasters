import React from "react";
import { H3 } from "../atoms/Heading";

// Assets
import Arrow from "../../images/plan/mobile/icon-arrow.svg";

// Styles
import styled from "styled-components";

const SummaryStyle = styled.summary`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
    list-style: none;
    outline: none;
    border: none;
    background: none;

    & .subtitle {
        margin-bottom: 0;
    }
`

const Summary = ({summary}) => {
    return(
        <>
            <SummaryStyle className="summary">
                <H3 className="subtitle" medium small>{summary}</H3>
                <img className="icon__arrow" src={Arrow} alt="" />
            </SummaryStyle>
        </>
    )
}


export default Summary;