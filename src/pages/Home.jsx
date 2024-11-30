// Components
import React from "react";
import Hero from "../components/molecules/Hero";
import SectionCollection from "../components/organisms/SectionCollection";
import SectionChooseUs from "../components/organisms/SectionChooseUs";
import SectionHowWorks from "../components/organisms/SectionHowWorks";


// Assets
import imgMobile from "../images/home/mobile/image-hero-coffeepress.jpg";
import imgTablet from "../images/home/tablet/image-hero-coffeepress.jpg";
import imgDesktop from "../images/home/desktop/image-hero-coffeepress.jpg";

const Home = ({ content }) => {

    return (
        <>
            <main className="main">

                <Hero
                    page="home"
                    imgMobile={imgMobile}
                    imgTablet={imgTablet}
                    imgDesktop={imgDesktop}
                    title={content.map(data => data.main.home.hero.title)}
                    paragraph={content.map(data => data.main.home.hero.text)}/>

                <SectionCollection content={content}/>
                <SectionChooseUs content={content}/>
                <SectionHowWorks content={content} page="home"/>
            </main>
        </>
    )
}


export default Home;