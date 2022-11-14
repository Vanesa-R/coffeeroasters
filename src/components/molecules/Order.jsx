import React from "react";
import { H3 } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { useState } from "react";

// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";


const OrderStyle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${device.tablet`
      flex-direction: row;
      text-align: left;
      &:not(:first-child){
        margin-top: 0px;
        }
    `} 


`

const Order = ({ subtitle, text, value }) => {

    const [order, setOrder] = useState({
        preference: "",
        bean: "",
        quantity: "",
        grind: "",
        delivery: "",
    });


    return (
        <>
            <OrderStyle 
                className="card"
                value={value}
                order={order}
                onClick={() => {
                    setOrder({...order})
                }}>

                <div className="card__info">
                    <H3 className="card__title">{subtitle}</H3>
                    <Text className="paragraph">{text}</Text>
                </div>
                
            </OrderStyle>
            
        </>
    )
}

export default Order;