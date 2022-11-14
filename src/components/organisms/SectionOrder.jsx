import React from "react";
import Summary from "../molecules/Summary";
import Order from "../molecules/Order";
import { useState } from "react";


// Styles
import styled from "styled-components";
import colors from "../../styles/theming/colors";



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
                    background-color: ${({theme}) => colors.white30};
                    padding: 24px;
                    border-radius: 10px;
                    text-align: left;
    
                    &:not(:last-of-type){
                        margin-bottom: 16px;
                    }
    
                    & .title {
                        margin-bottom: 8px;
                    }
    
                    & .paragraph {
                        margin-bottom: 0;
                    }
                }
            }
        }

        &:not([open]){
            & .section__cards {
                
            }
        }
        
    }

`


const SectionOrder = ({content, value, order, setOrder, summary, subtitle, text}) => {



    return(

        <>

            { content.map(data => (
                <SectionOrderStyle 
                    className="section section__order-summary"
                    key={data}>

                { data.main.plan.order.map((detail, i) => { 

                    let id = detail.anchor.split(" ").join("");
                    id = id.charAt(0).toLowerCase() + id.slice(1);

                    return (

                    <details 
                        className="details"
                        id={id}
                        open={i === 0 ? true : false}>

                        <Summary
                            key={detail.summary}
                            summary={detail.summary}/>
                            
                        
                        <div 
                            className="section__cards">

                            {detail.details.map(card => {
                        




                            return (

                                <Order
                                    key={card.title}
                                    value={card.title}
                                    order={order}
                                    setOrder={setOrder}
                                    subtitle={card.title}
                                    text={card.text}/>

                            )})}
                        </div>
                    </details>
                    )
                })}

                </SectionOrderStyle>
            ))}
        
                
        </>
    )
}

export default SectionOrder;