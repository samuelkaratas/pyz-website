import React from "react";
import { Link } from "react-router-dom";
import bicycle from '../assets/images/bicycle.svg'
import './Slider.min.css'

export default function Slider() {
  return (
    
      <div className="container-fluid text-center slider">
        <div className="row">
          <div className="slider-title p-5">make one’s dreams come true</div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <img style={{width:"100%"}} src={bicycle} alt="" />
          </div>
          <div className="col-md-5 mt-3">
            <div className="slider-description mt-5 ">Coming Soon</div>
            <div className="mt-3 slider-button"><Link to="/#wishlist">join our wishlist</Link></div>
          </div>
        </div>
      </div>
  
  );
}
