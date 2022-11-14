import React from "react";
import styled from "styled-components";

const ImageStyle = styled.picture`
    width: 200px;
    height: 150px;

    & .card__img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        
    }

`

const Image = ({ src, alt }) => (
    <>
        <ImageStyle className="card__picture">
            <img className="card__img" src={src} alt={alt} title={alt} />
        </ImageStyle>
    </>
)



export default Image;