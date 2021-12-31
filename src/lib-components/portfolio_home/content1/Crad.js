import React from 'react'
import styled from "styled-components"
// import pic from "./images/profile-pic02.png"
// import rating from "./images/Rating.png"
export const Card = () => {
    return (
        <Container>
            <Cont>
               <div className='item'>
               <img src={pic} alt="sx"/>
               </div>
               <div className='item item1'>
             <div className='content con1'>
                 <div className='box'>
                    <h7>120 <span>+</span></h7> <br/>
                     Completed Projects
                    </div>
                 <div className='box box1'>
                  <h9>A+  <img  class="rate"src={rating}/></h9>
                 
                   <br/>  Positive Reviews
                 </div>
               
             </div>
             <div className='content con2'>
                 <h3>Glad to Help You!

                 </h3>
             
             </div>
               <div className='content'>
                   <h6>
                      As a full-service digital designer, I work closely with my clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.
                  </h6>
                 </div>
               </div>
            </Cont>
               
           
        </Container>
    )
}


const Container=styled.div`
position: absolute;
width: 1110px;
height: 584px;
margin-left:160px;
margin-top:850px;


font-family:Poppins;

background: #E9E9E9;
border-radius: 45px;
display:flex;
justify-content:center;
 align-items:center;

.item{

}
.item1{

grid-column-start:2;
grid-column-end:4;
grid-template-rows:repeat(3,1fr);
}

.content{
    
    text-align:start;
   padding-left:30px; 
    
h3{
font-size: 40px;
color:black;
font-weight:600;

}
span{
    color:#8ED2A9;
}

h6{
    line-height:50px;
    font-size:20px;
}
}

.con1{
    grid-template-columns:repeat(2,1fr);
  
    display:flex;
    align-items:center;
    justify-content:space-around;
}
.con2{
    height:60px;
}
.box{
   
height:150px;
width:270px;

color:#676767;

img{

}
}

h7{
    font-size:62px;
    font-weight:600;
    color:black;
}
h9{ margin-top:50px;
    font-size:42px;
    font-weight:600;
    color:black;
    
}
.box1{
    padding-top:50px;
}
.rate{
  
}
}
`;
const Cont=styled.div`

width: 1000px;
height: 484px;
display:grid;
grid-template-columns:repeat(3,1fr);

`;
