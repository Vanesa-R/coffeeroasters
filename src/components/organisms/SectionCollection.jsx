// Components
import React from "react";
import { H2Gradient } from "../atoms/Heading";
import Card from "../molecules/Card";


// Assets
import imgEspresso from "../../images/home/desktop/image-gran-espresso.png"
import imgPlanalto from "../../images/home/desktop/image-planalto.png";
import imgPiccollo from "../../images/home/desktop/image-piccollo.png";
import imgPDanche from "../../images/home/desktop/image-danche.png";


// Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";

const SectionCollectionStyle = styled.section`
    & .subtitle {
        text-align: center;
    }

    & .section__cards {

        ${device.tablet`
            transform: translateY(-40px);
        `}

        ${device.desktop`
            display: flex;
            padding-left: 69px;
            padding-right: 69px;
        `}
    }

    & .card {
        padding: 0 24px 0;

        &:not(:last-of-type){
            padding-bottom: 48px;
        }

        & .card__title {
            margin-bottom: 16px;
        }
       
        ${device.tablet`
            padding: 0 50px 32px;

            & .card__picture {
                width: 45%;
            }

            & .card__info {
                width: 55%;
                margin-left: 32px;
            }
        `}

        ${device.desktop`
            flex-direction: column;
            text-align: center;
            padding-left: 0;
            padding-right: 0;

            & .card__picture,
            & .card__info {
                width: 100%;
            }
            & .card__info {
                margin-left: 0px;
            }
        `}
    }
`


const SectionCollection = ({section, content, src, alt, subtitle, text}) => {

    const images = [imgEspresso, imgPlanalto, imgPiccollo, imgPDanche];

    return(
        <SectionCollectionStyle 
            className="section section__collection">
            <H2Gradient className="subtitle">our collection</H2Gradient>

            <div className="section__cards">
                {content.map(data => (

                    data.main.home.collection.map((card, i ) => (

                        <Card
                            section="section__collection"
                            key={card.title}
                            src={images[i]}
                            alt={`Paquete de café ${card.title}`}
                            title={`Paquete de café ${card.title}`}
                            subtitle={card.title}
                            text={card.text}
                        />
                    ))

                ))}
            </div>

        </SectionCollectionStyle>
    )
}


export default SectionCollection;