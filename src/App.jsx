import React from "react";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Plan from "./pages/Plan";
import content from "./content/data.json";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


// Styles
import { ThemeProvider, createGlobalStyle } from "styled-components";
import colors from "./styles/theming/colors";
import fonts from "./styles/theming/fonts";
import device from "./styles/responsive/breakpoints";

const GlobalStyle = createGlobalStyle`
  html, body, #root, .App, * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, #root {
    width: 100%;

    ${device.desktop`
        max-width: 1248px;
        margin-left: auto;
        margin-right: auto;
    `}

    @media (min-width: 1920px) {
      max-width: 1504px;
    }
  }

  body {
    display: flex;
    justify-content: center;
    min-height: 100%;
    margin-left: 24px;
    margin-right: 24px;
    font-family: ${({ theme}) => fonts.primary};
    font-size: 15px;
    background-color: ${({ theme }) => colors.white20};

    ${device.tablet`
      margin-left: 40px;
      margin-right: 40px;
    `}

    ${device.desktop`
      margin-left: 0;
      margin-right: 0;
    `}

    & .section {
      margin-bottom: 120px;

      ${device.tablet`
        margin-bottom: 144px;

        &.section__collection {
          margin-bottom: 104px;
        }
      `}

      ${device.desktop`
        margin-bottom: 136px;
      `}


    }


  }

`


function App() {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={ colors }>
        <ThemeProvider theme={ fonts }>
          <Router>
            <header className="header">
              <Navbar content={content}/>
            </header>

            <Routes>
              <Route exact path="/" element={<Home content={content}/>}/>
              <Route path="/about" element={<About content={content}/>}/>
              <Route path="/plan" element={<Plan content={content}/>}/>
            </Routes>

            <Footer className="footer" content={content}/>

        </Router>


        </ThemeProvider>
        </ThemeProvider>
    </>
  );
}

export default App;
