import React from 'react'
import { Link } from 'react-router-dom'
import  './Home.css' 
   
 

const Home = () => {
  return (
    <div>
      <div className="top ">
    <div class="container ">
    <div class="row">
     
    <div class="col-sm-9 topnav">
    <img src=" public\favicon.ico" alt=""/>
        <h1>ReactJS</h1>
    </div>
<div class="col-sm-3 link">
    <Link to='/login' >
            <h2>Login</h2>
          </Link>
          <Link to='/register'  >
            <h2>Register</h2>
          </Link> 
    </div>
    </div>
    </div>
       
    </div>
      <div class="checklist">
          <Link to='/product_card' className='component'>
            <h4>Product card</h4>
          </Link> 
          <Link to='/progress_bar' className='component'>
            <h4>Progress Bar</h4>
          </Link> 
            <Link to='/complex' className='component'>
            <h4>Complex component example</h4>
          </Link> 
          <Link to='/portfoliohome' className='component'>
            <h4> Portfolio Home example</h4>
          </Link> 
          <i class="bi bi-list mobile-nav-toggle"></i>
      </div>
      <div>
      <section id="hero" className="d-flex h-100 ">
<div className="container ">
<div className="row">
<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 text-center mx-auto my-auto ">
     <h1 className="text-center fw-bolder text-white  mx-md-4 mt-4 justify-content-center primetxt"> ReactJS</h1>
     <h2 className=" mx-1 mx-md-4 mb-3 mt-4 text-center text-white shadow-sm" >A JavaScript Library for Building a User Interface</h2>
              <div className="d-flex justify-content-center mx-4 mb-lg-4 mb-2">
       <a> <button  className="btn btn-primary btn-lg text-white get-started">Get started <i
             className="fas fa-arrow-circle-right"></i> </button> </a>
     </div>
   </div>
<div className="col-lg-6 order-1 order-lg-2 hero-img  text-center" data-aos="zoom-in" data-aos-delay="200">
<img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" className="img-fluid animated" alt=""/>
</div>
</div>
</div>

</section>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 420">
   <path
     fill="#012970"
     fillOpacity="1"
     d="M0,320L48,282.7C96,245,192,171,288,154.7C384,139,480,181,576,170.7C672,160,768,96,864,85.3C960,75,1056,117,1152,154.7C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
   ></path>
 </svg>

 
 </div>
 <footer id="footer" class="footer">

     

<div class="container">
  <div class="copyright">
    &copy; Copyright <strong><span>ReacJS</span></strong>. All Rights Reserved
  </div>
   
</div>
</footer>
 </div>
   )}
export default Home
