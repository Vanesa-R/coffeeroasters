import React, {useState} from "react";
import Summary from "../molecules/Summary";
import Order from "../molecules/Order";
import OrderSummary from "../molecules/OrderSummary";
import Button from "../atoms/Button";


// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";

const SectionOrderStyle = styled.section`
    & .details {
        margin-bottom: 96px;
        
        ${device.tablet`
           &:last-of-type{
            margin-bottom: 144px;
           }
        `}
            
        &[open] {
            & .summary {
                & .icon__arrow {
                    transform: rotate(180deg);
                }
            }
            & .section__cards {
                max-height: auto;
                overflow: hidden;

                ${device.tablet`
                    display: flex;
                    flex-direction: row; 
                    align-items: flex-start;
                `}
                & .card {
                    padding: 24px;
                    border-radius: 10px;
                    text-align: left;
                    transition: 150ms ease-in background-color;

                    ${device.tablet`
                        margin-top: 26px;
                        padding: 32px 26px 84px;
                    `}    

                    &:not(:last-of-type){
                        margin-bottom: 16px;
                        ${device.tablet`
                            margin-bottom: 0;
                        `}
                    }

                    &:nth-of-type(even){
                        ${device.tablet`
                            margin-left: 10px;
                            margin-right: 10px;
                        `}
                    }

                    & .card__info {
                        & .card__title {
                            ${device.tablet`
                                margin-bottom: 26px;
                            `}
                        }
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
    }

`


const SectionOrder = ({ content }) => {

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
                                            order={order}
                                            setOrder={setOrder}
                                            filter={id}
                                            value={card.title}
                                            subtitle={card.title}
                                            text={card.text}/>
                                        ))}

                                </div>
                            </details>
                            )
                        })}

                    </div>

                    <OrderSummary 
                        order={order}
                        setOrder={setOrder}
                        title={content.map(data => data.main.plan.summary.title)}
                        text={
                            (order.preferences === "Capsule" )

                            ? <>I drink my coffee using <span className="order__value">Capsules</span>, 
                            with a <span className="order__value">{order.beanType || "_____"}</span> type of bean.
                            <span className="order__value"> {order.quantity ||  "_____"}</span>, 
                            sent to me <span className="order__value">{order.deliveries || "_____"}</span>.</>

                            : <>I drink my coffee as <span className="order__value">{order.preferences || "_____"}</span>, 
                            with a <span className="order__value">{order.beanType || "_____"}</span> type of bean. 
                            <span className="order__value">{ order.quantity ||  "_____"}</span> 
                            ground ala <span className="order__value">{order.grindOption || "_____"}</span>, 
                            sent to me <span className="order__value">{order.deliveries || "_____"}</span>.</>    
                        }>
                            
                    </OrderSummary>

                    <Button cta="Crate my plan!" disabled></Button>

                </SectionOrderStyle>
            ))}
                
        </>
    )
}

export default SectionOrder;