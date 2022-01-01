

import React from "react"
import {Navbar} from "./navbar/Navbar";
import {Header} from "./header/Header"
import {Card} from "./content1/Crad"
import {Card1} from "./content1/Card1"
import {Card2} from "./content1/Card2";
import { Card3 } from './content1/Card3';
import Reviews from './Reviews/Reviews';
import {Footer} from "./footer/Footer"
function PortfolioHome(props) {
  return (
    <div className="App">
      <Navbar/>
      <Header pic='https://imgur.com/S58nAym'/>
     <Card/>
     <Card1/>
     <Card2/>
     <Card3/>
     <Reviews/>
     <Footer/>
    </div>
  );
}

export default PortfolioHome;