import React from "react";
import Hero from "../components/molecules/Hero";
import Card from "../components/molecules/Card";
import imgMobile from "../images/about/mobile/image-hero-whitecup.jpg";
import imgDesktop from "../images/about/desktop/image-hero-whitecup.jpg";


const About = ({content}) => {
    return(
        <>
            <main className="main">
                <Hero
                    imgMobile={imgMobile}
                    imgDesktop={imgDesktop}
                    page="about"
                    title={content.map(data => data.main.about.hero.title)}
                    paragraph={content.map(data => data.main.about.hero.text)}/>



                <section className="section__commitment">
                        {content.map(data => (
                            <Card
                                subtitle={data.main.about.commitment.title}
                                text={data.main.about.commitment.text}/>
                        ))}
                        
                    </section>
            </main>
        </>
    )
}

export default About;
