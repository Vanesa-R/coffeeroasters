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
        color: ${({order, filter, value}) => order[filter] === value && colors.white10};
        
        ${device.tablet`
           font-size: 24px;
        `}
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
        let nextDetails = e.currentTarget.parentNode.parentNode.nextSibling;
        let grindOption = document.querySelector(".details__container #grindOption");

        (nextDetails && nextDetails.getAttribute("disabled") !== "disabled")
            ? (nextDetails.setAttribute("open", "open"))
            : ((nextDetails) && nextDetails.nextSibling.setAttribute("open", "open"));
        
    
        if (e.currentTarget.parentNode.parentNode.getAttribute("id") === "preferences"){
          if (e.currentTarget.getAttribute("value") === "Capsule"){
            if (grindOption.getAttribute("open") === "open"){
                grindOption.removeAttribute("open")
            }
          } else {
            if (grindOption.previousSibling.getAttribute("open") === "open" && grindOption.nextSibling.getAttribute("open") === "open") {
                grindOption.setAttribute("open", "open")
            }
          }
        }    
    }
   
    
    const setDisabled = (e) => {        
    let grindOption = document.querySelector(".details__container #grindOption");
    (e.currentTarget.getAttribute("value") === "Capsule") 
        ? (grindOption.setAttribute("disabled", "disabled"))
        : ((grindOption.getAttribute("disabled") === "disabled") 
            && grindOption.removeAttribute("disabled"));

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
                    if (e.currentTarget.parentNode.parentNode.getAttribute("id") === "preferences"){
                        setDisabled(e)
                    }
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