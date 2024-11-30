import React, { Fragment } from "react";
import { H2 } from "../atoms/Heading";
import Button from "../atoms/Button";
import Card from "../molecules/Card";

// Styles
import styled from "styled-components";
import colors from "../../styles/theming/colors";
import device from "../../styles/responsive/breakpoints";

const SectionHowWorksStyle = styled.section`
    text-align: center;
    counter-reset: num;

    ${device.tablet`
        text-align: left;
        `}
    
    & .subtitle {
        margin-bottom: 80px;
        ${device.tablet`
            margin-bottom: 150px;
            `}
    }
    
    & .section__cards {
        display: flex;
        flex-direction: column;
        ${device.tablet`
            flex-direction: row;
        `}

        & .card {
            position: relative;
            height: 100%;
            padding-top: 96px;
            counter-increment: num;

            ${device.tablet`
                padding-top: 114px;

                &::before {
                    position: absolute;
                    content: "";
                    top: -90px;
                    width: 30px;
                    height: 30px;
                    background-color: transparent;
                    border: 2px solid #0E8784;
                    border-radius: 50%;
                    z-index: 5;
                }

                &:not(:last-of-type){
                    &::after{
                        position: absolute;
                        top: -75px;
                        left: 32px;
                        content: "";
                        width: calc(100% - 12px);
                        height: 2px;
                        background-color: #FDD6BA;
                    }
                }
            `}
            
            &:not(:last-of-type){
                margin-bottom: 56px;
                ${device.tablet`
                    margin-bottom: 100px;
                `}
            }

            &:nth-of-type(2){
                ${device.tablet`
                    margin-left: 20px;
                    margin-right: 20px;
                `}
            }
            &:last-of-type{
                margin-bottom: 80px;
                ${device.tablet`
                    margin-bottom: 100px;
                `}
            }
    
            & .card__title {
                margin-bottom: 24px;

                ${device.tablet`
                    width: 70%;
                    margin-bottom: 38px;
                `}

                @media (min-width: 965px) {
                    width: 55%;
                }
                
                &::before {
                    position: absolute;
                    content: "0" counter(num, decimal);
                    top: 10px;
                    left: 0;
                    width: 100%;
                    height: fit-content;
                    font-size: 72px;
                    font-weight: 900;
                    color: ${({theme}) => colors.peach};
                    
                }
            }
        }
    }

    &.section--dark {
        margin-left: -24px;
        margin-right: -24px;
        padding: 80px 24px 0;
        background-color: ${({theme}) => colors.blue90};
        border-radius: 10px;

        ${device.tablet`
            margin-left: -40px;
            margin-right: -40px;
            padding: 180px 40px 0;
        `}
        
        & .card__info {
            & .card__title, & .paragraph {
                color: ${({theme}) => colors.white20}
            }

        }
    }

`

const SectionHowWorks = ({page, content, subtitle, text}) => {

    return(
        <SectionHowWorksStyle 
            className={page === "plan" ? "section section__how-works section--dark" : "section section__how-works"}>
            
            { content.map(data => (
                <Fragment key="section__how-works">
                    {page === "home" && (
                        <H2 className="subtitle" small medium>{data.main.home.howWorks.title}</H2>
                    )}

                    <div className="section__cards">
                        {data.main.home.howWorks.cards.map(card => (
                            <Card
                                key={card.title}
                                subtitle={card.title}
                                text={card.text}/>
                        ))}
                    </div>

                    {page === "home" && (
                        <Button cta={"Create your plan"}/>
                    )}


                </Fragment>
            ))}
        </SectionHowWorksStyle>
    )
}

export default SectionHowWorks;