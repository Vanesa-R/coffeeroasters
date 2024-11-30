import React from "react";
import { H1 } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import Button from "../atoms/Button";


//Styles
import styled from "styled-components";
import device from "../../styles/responsive/breakpoints";


const HeroStyle = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   width: 100%;
   height: auto;
   margin-top: 40px;
   padding: 100px 24px;
   border-radius: 0.5em;
   background-repeat: no-repeat;
   background-size: cover;

   &.hero__home {
      .paragraph {
         margin-bottom: 40px;
      }
   }

   ${device.tablet`
      margin-top: 54px;
      padding: 104px 58px;
      align-items: flex-start;
      text-align: left;

      & .title, & .paragraph {
         width: 65%;
      } 
   `}

   ${device.desktop`
      padding: 118px 85px;
      margin-top: 44px;
   
      & .title {
         width: 42%;
      } 

      & .paragraph {
         width: 38%;
      }
   `}
   
`

const Hero = ({ page, title, paragraph, imgMobile, imgTablet, imgDesktop }) => {

   const imgPath = window.innerWidth < 768 ? imgMobile : window.innerWidth < 1440 ? imgTablet : imgDesktop;

   return(
      <>
         <HeroStyle className={`section hero hero__${page}`}
            style={{backgroundImage: `url(${imgPath})` }}>
                       
            <H1 className="title">
               {title}
            </H1>

            <Text className="paragraph" light>
               {paragraph}
            </Text>

            { page === "home" && (
               <Button cta={"Create your plan"}/>
            )}

         </HeroStyle>
      </>
   )
}


export default Hero;