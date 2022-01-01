import React from 'react'
import styled from 'styled-components';


// import img02 from "./images/img02.png"
// import img03 from "./images/img03.png"
// import img04 from "./images/img04.png"

export const Card2 = () => {
    return (
        <Container>
             <div className='header'>
              <h1>Why Hire Me?</h1>
              </div>
            
              <div className='Fluid'>
               <div className='box'>
                  <img src='https://i.imgur.com/5cJF5Ux.png' />
                  <h3>  Communicative</h3>
                  <h5>Amet minim mollit non <br/>deserunt ullamco est sit <br/>aliqua dolor do amet sint. </h5>
               </div>
               <div className='box'>
                    <img src='https://i.imgur.com/S58nAym.png' />
                    <h3>Professional</h3>
                  <h5>Amet minim mollit non<br/> deserunt ullamco est sit <br/>aliqua dolor do amet sint. </h5>

               </div>
               <div className='box'>
               <img src='https://i.imgur.com/1Zm5ssq.png' />
               <h3>Collaborative​</h3>
               <h5>Amet minim mollit non<br/> deserunt ullamco est sit<br/> aliqua dolor do amet sint. </h5>

               </div>
               <div className='box'>
               <img src='https://i.imgur.com/htADX1F.png' />
               <h3>
               Client’s Favourite
               </h3>
               <h5>Amet minim mollit non<br/> deserunt ullamco est sit<br/> aliqua dolor do amet sint. </h5>

               </div>
              
              </div>
        
        </Container>
    )
}
const Container=styled.div`

position: absolute;
width: 1110px;
height: 643px;
margin-left: 165px;
margin-top: 2598px;


text-align:left;
font-family:Poppins;

h1{
    font-size:30px;
height: 62px;
width: 329px;

}
.header{
    text-aligns:center;
    padding-left:430px;
   
}
.Fluid{
    diplay:grid;
    grid-template-columns:repeat(4,1fr);
    display:flex;
    justify-content:space-between;

}
h3{
    font-sizze:24px;
   
}
h5{
    font-size:18px;
    line-height:30px;
    color: #828282;

}
`;


