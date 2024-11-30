// Components
import React from "react";
import { H4 } from "../atoms/Heading";
import Quote from "../atoms/Quote";

// Styles
import styled from "styled-components";
import colors from "../../styles/theming/colors";
import device from "../../styles/responsive/breakpoints";

const OrderSummaryStyle = styled.div`
    padding: 32px 24px;
    background-color: ${({theme}) => colors.blue90};
    border-radius: 10px;

    ${device.tablet`
        padding: 26px 44px;
    `}

    & .subtitle {
        margin-bottom: 8px;
    }

`


const OrderSummary = ({title, text }) => {
   
    return(
        <>
            {
                <OrderSummaryStyle 
                    className="resume-order__container" 
                    key="order-summary">
                    
                    <H4
                        className="subtitle"
                        opacity="true" 
                        uppercase>
                        {title}
                    </H4>

                    <Quote text={text}/>
                                                
                </OrderSummaryStyle>
                
            }
        </>
    )
}


export default OrderSummary;
