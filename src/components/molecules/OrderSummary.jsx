// Components
import React from "react";
import { H4 } from "../atoms/Heading";

// Styles
import styled from "styled-components";
import colors from "../../styles/theming/colors";
import Quote from "../atoms/Quote";

const OrderSummaryStyle = styled.div`
    padding: 32px 24px;
    background-color: ${({theme}) => colors.blue90};
    border-radius: 10px;

    & .subtitle {
        margin-bottom: 8px;
    }

`


const OrderSummary = ({title, text}) => {
    return(
        <>
            {
                <OrderSummaryStyle 
                    className="resume-order__container" 
                    key="order-summary">
                    
                    <H4
                        className="subtitle"
                        opacity 
                        uppercase>
                        {title}
                    </H4>

                    <Quote
                        className="quote"
                        text={text}/>
                        
                </OrderSummaryStyle>
                
            }
        </>
    )
}


export default OrderSummary;
