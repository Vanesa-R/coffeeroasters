// Components
import React, { Fragment } from "react";
import { H2 } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import Card from "../molecules/Card";


// Assets
import coffee from "../../images/home/desktop/icon-coffee-bean.svg";
import gift from "../../images/home/desktop/icon-gift.svg";
import truck from "../../images/home/desktop/icon-truck.svg";


// Styles
import styled from "styled-components";
import colors from "../../styles/theming/colors";
import device from "../../styles/responsive/breakpoints";




const SectionChooseUsStyle = styled.section`
    text-align: center;
    & .section__intro {
        padding: 64px 24px 28px;
        background-color: ${({theme}) => colors.grey20};
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        & .paragraph {
            margin-bottom: 0px;
        }

        ${device.tablet`
            padding: 56px 74px 32px;
        `}
    }

    & .section__cards {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding-top: 36px;

        &::before {
            position: absolute;
            content: "";
            inset: 0;
            width: 100%;
            height: calc(50% + 36px);
            background-color: ${({theme}) => colors.grey20};
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        ${device.desktop`
            flex-direction: row;
            justify-content: center;
            gap: 32px;
        `}

        & .card {
            position: relative;
            padding: 200px 34px 48px;
            margin-inline: 24px;
            background-color: ${({theme}) => colors.cyan};
            border-radius: 10px;

            &::before {
                position: absolute;
                content: "";
                top: 92px;
                width: 72px;
                height: 72px;

                ${device.tablet`
                    top: calc(50% - 36px);
                    left: 55px;

                `}

                ${device.desktop`
                    top: 72px;
                    left: calc(50% - 36px);
                `}
            }

            &:first-of-type {
                &::before {
                    background-image: url(${coffee});
                }
            }

            &:nth-child(2) {
                &::before {
                    background-image: url(${gift});
                }
            }

            &:last-of-type {
                &::before {
                    background-image: url(${truck});
                    height: 50px;
                    ${device.tablet`
                        top: calc(50% - 27px);
                    `}

                    ${device.tablet`
                        top: 82px;
                    `}
                }
            }

            ${device.tablet`
            padding: 40px 48px 40px 180px;
            margin-inline: 0px;
            `}
            
            ${device.desktop`
                max-width: 350px;
                padding: 200px 46px 48px;
                text-align: center;
            `}

            & .card__info {
                & .card__title {
                    margin-bottom: 24px;
                }
            }
        }
    }
`


const SectionChooseUs = ({section, content, subtitle, text}) => {

    return(
        
        <SectionChooseUsStyle className="section section__choose">

            {content.map(data => (
                
                <Fragment key="section__choose">
                    <div className="section__intro">
                        <H2 className="subtitle" light>{data.main.home.chooseUs.title}</H2>
                        <Text className="paragraph" light>{data.main.home.chooseUs.text}</Text>
                    </div>

                    <div className="section__cards">

                        {data.main.home.chooseUs.cards.map(card => (
                            
                            <Card
                                section="section__choose"
                                key={card.title}
                                subtitle={card.title}
                                text={card.text}/>
                        ))}
                        
                    </div>
                </Fragment>
            ))}
            
        </SectionChooseUsStyle>
    )
}

export default SectionChooseUs;