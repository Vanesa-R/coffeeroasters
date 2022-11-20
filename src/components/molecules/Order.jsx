import React from "react";
import { H3 } from "../atoms/Heading";
import { Text } from "../atoms/Text";

// Styles
import styled from "styled-components";
import colors from "../../styles/theming/colors";
import device from "../../styles/responsive/breakpoints";

const OrderStyle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${({ order, filter, value }) => order[filter] === value  ? ({theme}) => colors.cyan : ({theme}) => colors.white30};

    & .card__title {
        color: ${({order, filter, value}) => order[filter] === value && colors.white10}
    }

    & .paragraph {
        color: ${({order, filter, value}) => order[filter] === value && colors.white20}
    }

    ${device.tablet`
      flex-direction: row;
      text-align: left;
      &:not(:first-child){
        margin-top: 0px;
        }
    `}


`

const Order = ({ subtitle, text, order, setOrder, filter, value }) => {
    
    const setOption = () => {
        setOrder({...order, [filter]: value})
    }

    const setOpen = (e) => {
        if (e.currentTarget.parentNode.parentNode.nextSibling) {
            e.currentTarget.parentNode.parentNode.nextSibling.setAttribute("open", "open")
        }
    }

    return (
        <>
            <OrderStyle
                className="card"
                order={order}
                filter={filter}
                value={value}
                onClick={(e) => {
                    setOption()
                    setOpen(e)
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