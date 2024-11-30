import React from "react";
import Hero from "../components/molecules/Hero";
import SectionHowWorks from "../components/organisms/SectionHowWorks";
import SectionOrder from "../components/organisms/SectionOrder";

// Assets
import imgMobile from "../images/plan/mobile/image-hero-blackcup.jpg";
import imgTablet from "../images/plan/desktop/image-hero-blackcup.jpg";
import imgDesktop from "../images/plan/desktop/image-hero-blackcup.jpg";



const Plan = ({content}) => {

    return (
        <>
            <main className="main">

                <Hero
                    imgMobile={imgMobile}
                    imgTablet={imgTablet}
                    imgDesktop={imgDesktop}
                    page="plan"
                    title={content.map(data => data.main.plan.hero.title)}
                    paragraph={content.map(data => data.main.plan.hero.text)}/>

                <SectionHowWorks 
                    content={content} 
                    page="plan"/>

                <SectionOrder
                    content={content}/>

            </main>
        </>
    )
}


export default Plan;