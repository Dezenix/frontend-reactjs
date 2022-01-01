import React from 'react'
import styled from 'styled-components'
// import img01 from  "./Images/testimonial1.png"
// import img02 from  "./Images/testimonial2.png"


const  Reviews = () => {
    return (
        <Container>
            <div className='box'>

      
            <div >
           
             <div>
                 <h1>We Are Loved By Users<br/> And Clients Worldwide</h1>
             </div>


            </div>
            <div className='review-sec' >
               <div className='feedback'>
               <h3>
               One of the best additions to our feedback loop has been the company-wide adoption of Fellow.
               </h3>
               <div>
               <img className='test'  src='https://i.imgur.com/caUKig4.png'/>
               </div>
               

               </div>
               <div className='feedback'>
               <h3>
               It provides an amazing platform for constant conversations and direct feedback between managers and direct reports.
               </h3>
               <div>
               <img className='test'  src='https://i.imgur.com/qgt2Hv2.png'/>
               </div>
              
             </div>
            </div>
          </div>
           
            
        </Container>
    )
}

export default Reviews

const Container =styled.div`
position: absolute;
border:solid 1px red;
width: 1640px;
height: 683px;

margin-top: 3863px;
background:#6FC2C5;
display:flex;
justify-content: center; 
align-items:center;   
.box{
    
   width: 1109px;
   height: 583px;
  h1{
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: center;
    color:white;
  }
}
.box1{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    
}
.review-sec{
    display:flex;
    justify-content:center
}
.feedback{
    background:white;
    border-radius:30px 0 30px 30px;
    margin-left:50px;
    width: 529px;
    height: 351px;

    h3{
        margin:50px 30px;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 0px;
        text-align: left;
        
        height:150px;

    }
}
.test{
margin-left:50px;

}
`;
