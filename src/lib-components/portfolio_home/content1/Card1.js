import React from 'react'
import styled  from 'styled-components';
// import img2 from "./images/design2.png"
// import img1 from "./images/design1.png"

export const Card1 = () => {
    return (
        <Container>
           <div className='bar'>
               
               <h1>Recent Projects</h1>
               <button className='btn-1'>
                Veiw More
               </button>
               
             </div>  
               <div className='cont'>
                   <div className="sub-cont">
                       <img src='https://i.imgur.com/uMQKtAn.png'/>
                       <h2>UI Portofolio</h2>
                       <div>

                       <h3><i className="fas fa-layer-group"></i>View study case</h3>
                       <h3><i className="far fa-eye"></i>Live Preview</h3>
                       </div>
                  
                   </div>
                   <div className="sub-cont">
                       <img src='https://i.imgur.com/g0dtKgj.png'/>
                       <h2>UI Portofolio</h2>
                       <div>
                       <h3><i className="fas fa-layer-group"></i>View study case</h3>
                       <h3><i className="far fa-eye"></i>Live Preview</h3>
                       </div>
                      
                       
                   </div>

               </div>
           



        </Container>
    )
}

const Container = styled.div`

font-family:Poppins;
position: absolute;
width: 1110px;

height: 584px;
margin-left: 165px;
margin-top: 1534px;

button {
    margin-right: 20px;
    margin-top:10px;
    width: 151px;
    height: 55px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: white;
  }
  .btn-1 {
    background: #eebf63;
    font-family: poppins;
  }
  
  div{
      display:flex;
      
      h3{
          margin-right:70px;
      }
}
  .bar{
    width: 1110px;
     


       display:flex;
       justify-content:space-between;
  }
  .cont{
      display:flex;
      justify-content:space-between;
      width: 1110px;
  }
.sub-cont{
    display:block;
    text-align:start;
}
.far{
    margin-right:10px;
}
.fas{
    margin-right:10px;
}
`;