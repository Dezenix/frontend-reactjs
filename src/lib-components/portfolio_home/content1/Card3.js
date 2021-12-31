import React from 'react'
import styled from "styled-components"
// import logo from "./images/Logos.png"
export const Card3 = () => {
    return (
        <Container>
            <div className='box'>
             <h1>
             Interested working
with me?
             </h1>
            </div>
            <div className='box'>
            <button className="btn-1">
            <i class="fas fa-envelope"></i>
                Email Me</button>
               
            </div>
            <div className='box'>
            <button className="btn-2">See More Projects</button>
            </div>
            <div className='logos'>
                  <img src={logo}/>
            </div>
        </Container>
    )
}

const Container=styled.div`
position: absolute;
width: 1110px;
height: 313px;
margin-left: 165px;
margin-top: 3283px;

background:#EEBF63;
display:flex;
border-radius:25px;
justify-content:center;
align-items:center;
display:grid;
grid-template-columns:repeat(3,1fr);

.box{
   
    align-items:center;

    h1{
margin-left:80px;
margin-top:60px;
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 62px;
letter-spacing: 0em;
text-align:start;
color:white;

    }
    button {
        margin-right: 20px;
    
        width: 211px;
        height: 70px;
        border-radius: 10px;
        border: none;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        color: white;
      }
    
      .btn-1 {
          
        background: #ffffff;
        color:black;
        font-family: poppins;

      }
      .btn-2 {
        width:273px;
        background-color: #EEBF63;
        color: white;
        border: solid #ffffff 3px;
      }

      .fas{
          padding:0 10px;
      }
}

.logos{
position: absolute;
width: 1013.98px;
height: 72.98px;
margin-left: 13px;
margin-top: 614px;
}



`;