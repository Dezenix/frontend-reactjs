import styled from "styled-components";
import React from "react";



const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-around;
  }
  
  h5 {

    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: bolder;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: left;
  }
  ul {
    display: flex;
    margin-top:30px;
  }
  li {
    margin: 0px 30px;
    list-style: none;
    font-family: Poppins;
  }
  a {
    text-decoration: none;
    width: 66px;
    height: 24px;
    left: 274px;
    top: 0px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
   

    text-align: center;

    color: #151517;
    color: black;
  }
`;

export const Navbar = () => {
  return (
    
      <Container>
        <nav>
          <div className="logo">
            <h5>Arlene Rey</h5>
          </div>
          <div className="nav-container">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li className="nav-links">
                <a href="#">About</a>
              </li>
              <li className="nav-links">
                <a href="#">Project</a>
              </li>
              <li className="nav-links">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    
  );
};

