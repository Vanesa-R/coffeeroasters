import React from "react";
import styled from "styled-components";

const IconStyle = styled.a`
    width: 24px;
    height: 24px;

    & .icon {
        width: 100%;
        height: 100%;
    }
`


const Icon = ({src, title }) => (
    <>
        <IconStyle className="social-media__link">
            <img
                className="icon"
                src={src}
                alt={title}
                title={title}/>
        </IconStyle>
    </>
)

export default Icon;