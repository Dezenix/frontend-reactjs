import React from 'react'
import styled from "styled-components"

export const Footer = () => {
    return (
        <Container>
            <div>
                 <h1>Let's zxjjdszdsjsdkConnect</h1>
            </div>
            <div>
                <a href="/">
                <i class="fab fa-instagram"></i>

                </a>
            < a href="/">
            <i class="fab fa-youtube"></i>
            </a>
           <a href="/">
           <i class="fas fa-basketball-ball"></i>
           </a>
            
               </div>
                   <div>
            <button className='bt'>
                Back To Top<i class="fas fa-arrow-up"></i>
            </button>
               </div>
            
        </Container>
    )
}
const Container=styled.div`
width: 1109px;
height: 46px;
margin-left: 165px;
margin-top: 4605px;
display:flex;
justify-content:space-between;
h1{
    font-family: Poppins;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: 46px;
letter-spacing: 0em;
text-align: left;

}
.fas  {
    font-size:30px;
    margin-left:30px;
    margin-top:30px;
    color:#676767;

}
.fab{
    margin-top:20px;
    font-size:30px;
    margin-left:30px;
    color:#676767;
}
.bt{
    margin-top:5px;
    border: none;
    background:transparent;
    font-wight:900;
    width: 302px;
    height: 36px;
   font-family:Poppins;
   font-size:20px;
   i{
  font-size:20px;
  color: black;
   }
}

`;