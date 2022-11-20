import React, { Fragment } from "react";
import ListItem from "../atoms/ListItem";
import Logo from "../molecules/Logo";
import Icon from "../molecules/Icon";

//Assets
import Facebook from "../../images/shared/icon-facebook.svg"
import Twitter from "../../images/shared/icon-twitter.svg"
import Instagram from "../../images/shared/icon-instagram.svg" 

// Styles
import styled from "styled-components";
import colors from "../../styles/theming/colors";
import device from "../../styles/responsive/breakpoints";
import fonts from "../../styles/theming/fonts";


const FooterStyle = styled.footer`
    background-color: ${({theme}) => colors.grey20};
    padding: 54px;
    margin-bottom: 72px;
    text-align: center;
    
    & .logo {
        margin-bottom: 48px;
        & .letters {
            fill: ${({theme}) => colors.white10};
        }
    }

    & .footer__list {
        margin-bottom: 48px;

        ${device.tablet`
            display: flex;
            flex-direction: row;
            justify-content: center;
        `}

        & .list__item {
            text-align: center;
            margin-bottom: 24px;
            & .list__item__link {
                text-transform: uppercase;
                font-size: ${({theme}) => fonts.size1};
                color: ${({theme}) => colors.grey10};
            }   
        }
    }

    & .social-media {
        display: flex;
        justify-content: center;

        & .social-media__link {
            &:nth-of-type(odd){
                margin-left: 24px;
                margin-right: 24px;
            }
        }
    }
   
`


const Footer = ({content, src, title}) => {

    const icons = [Facebook, Twitter, Instagram];

    return (
        <>
            <FooterStyle>
                <Logo/>

                { content.map(data => (

                    <Fragment key="footer">
                        <ul className="footer__list">
                            { data.navigation.map(item => (
                                <ListItem
                                    key={item.title}
                                    path={item.path}
                                    title={item.title}>
                                </ListItem>
                            ))}
                        </ul>

                        <div className="social-media">
                            { data.footer.social.map((icon, i) => (
                                <Icon
                                    key={icon.title}
                                    src={icons[i]}
                                    alt={icon.title}
                                    title={icon.title}/>
                            ))}
                        </div>
                    </Fragment>
                ))}
                

            </FooterStyle>
        </>
    )
}



export default Footer;