import React from "react";
import Summary from "../molecules/Summary";
import Order from "../molecules/Order";
import OrderSummary from "../molecules/OrderSummary";
import { useState } from "react";


// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";

const SectionOrderStyle = styled.section`
    & .details {
        margin-bottom: 96px;
            
        &[open] {
            & .summary {
                & .icon__arrow {
                    transform: rotate(180deg);
                }
            }
            & .section__cards {
                max-height: auto;
                overflow: hidden;
                & .card {
                    padding: 24px;
                    border-radius: 10px;
                    text-align: left;
                    transition: 150ms ease-in background-color;
    
                    &:not(:last-of-type){
                        margin-bottom: 16px;
                    }
    
                    & .title {
                        margin-bottom: 8px;
                    }
    
                    & .paragraph {
                        margin-bottom: 0;
                    }

                    ${device.desktop`
                        cursor: pointer;
                        &:hover {
                            background-color: #fdd6ba;
                        }
                    `}
                }
            }
        }

        &:not([open]){
            & .section__cards {
                
            }
        }
        
    }

`


const SectionOrder = ({ content, filter, setOption }) => {

    const [order, setOrder] = useState({
        preferences: "",
        beanType: "",
        quantity: "",
        grindOption: "",
        deliveries: "",
    });

    return(
        <>
            { content.map(data => (
                <SectionOrderStyle 
                    className="section section__order-summary"
                    key="section__order-summary">

                    <div className="details__container">
                        
                        { data.main.plan.order.map((detail, i) => { 
                            let id = detail.anchor.split(" ").join("");
                            id = id.charAt(0).toLowerCase() + id.slice(1);

                            return (
                            
                            <details 
                                className="details"
                                key={id}
                                id={id}
                                open={i === 0 ? true : false}>

                                <Summary
                                    key={detail.summary}
                                    summary={detail.summary}/> 
                                
                                <div className="section__cards">
                                    {detail.details.map(card => (

                                        <Order
                                            key={card.title}
                                            value={card.title}
                                            order={order}
                                            setOrder={setOrder}
                                            filter={id}
                                            subtitle={card.title}
                                            text={card.text}/>
                                    ))}

                                </div>
                            </details>
                            )
                        })}
                    </div>

                    <OrderSummary 
                        title="titulo"
                        text="blablabla">

                    </OrderSummary>

                </SectionOrderStyle>
            ))}
                
        </>
    )
}

export default SectionOrder;