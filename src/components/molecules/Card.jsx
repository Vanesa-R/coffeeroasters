import React from "react";
import Image from "../atoms/Image";
import { H3 } from "../atoms/Heading";
import { Text } from "../atoms/Text";

// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";

const CardStyle = styled.article`
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

const Card = ({section, src, title, subtitle, text }) => {
    return (
        <>
            <CardStyle className="card">

                { section === "section__collection" && (
                    <Image src={src} alt={title} title={title}/>
                )}

                <div className="card__info">
                    { section === "section__choose" 
                        ? (
                            <>
                                <H3 className="card__title" light>{subtitle}</H3>
                                <Text className="paragraph" light>{text}</Text>
                            </>
                        )
                        : (
                            <>
                                <H3 className="card__title">{subtitle}</H3>
                                <Text className="paragraph">{text}</Text>
                            </>
                        )
                    }

                </div>
        
            </CardStyle>
        </>
    )
}

export default Card;