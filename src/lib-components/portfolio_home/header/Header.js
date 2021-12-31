import React from 'react'
import styled from "styled-components"
// import line from "./images/line.png"
// import pic from "./images/profile-pic01.png"
// import bullets from "./images/bullets.jpg"

export const Header = (props) => {
    return (
        <Container>
        <div>
          <box>
            <ul>
              <li>
                <h3>Hey!</h3>
              </li>
              <li>
                <h1>
                  I’m <span> Rey</span>.<br />
                  an UI/UX Designer.
                </h1>
              </li>
              <li>
                <img src={props.line} alt="line" />
              </li>
              <li>
                <h5>
                
                  UX Designer based in Jakarta, Indonesia.
                  <br />
                  I am designing with a minimal and beautiful design
                  in mind.
                </h5>
              </li>
              <li>
              <h4>Follow me</h4>

                <Icons>
                 <i class="fab fa-instagram"></i>
           
                 
                 <i class="fab fa-youtube"></i>
      
        
                  <i class="fas fa-basketball-ball"></i>
          
                   </Icons>
             </li>
              <li>
                <button className="btn-1"><i class="fas fa-envelope"></i>Mail Me</button>
                <button className="btn-2"><i class="fas fa-arrow-down"></i>Download CV</button>
              </li>
            </ul>
          </box>
          <box>
            <div>
              <img src='https://i.imgur.com/S58nAym.png' alt="picsad" />
              <img className="back" src={props.bullets} />
            </div>
          </box>
        </div>
      </Container>
    )
}



const Container = styled.div`
  width: 100%;
  position: absolute;
width: 1440px;
height: 717px;
margin-left: 0px;
margin-top: 0px;
  font-family: poppins;
  display: flex;
  div {
    display: flex;
    margin-left: 150px;
    align-items: center;
  }
  ul {
  }
  li {
    display: flex;
    text-align: start;
    list-style: none;
   

    div {
      display: flex;
    
    }
    img {
      padding-left: 70px;
    }
  }
  h3 {
    
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #828282;
  }
  h1 {
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 62px;
    letter-spacing: 0em;
    text-align: left;
  }
  span {
    color: #eebf63;
  }
  h5 {
    
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: start;

    colr:#676767;
  }
  button {
    margin-right: 20px;

    width: 184px;
    height: 55px;
   
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
  .btn-2 {
    background-color: white;
    color: black;
    height: 55px;
    width: 184px;
    left: 346px;


    border: solid #eebf63 3px;
  }
  .back {
    padding-top: 400px;
    padding-right: 400px;
    position: absolute;
    z-index: -30;
  }
  .fas{
    margin-right:10px;
  }
  .fa-arrow-down{
    color:black;
  }
 
  h4{
    font-size:18px;
    color:#676767;
  }
  
`;

const Icons=styled.div`
display:flex;




i{
  font-size:32px;
  margin-right:30px;
  color:#676767;

}
`;
