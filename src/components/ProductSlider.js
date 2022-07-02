import React from 'react'
import './ProductSlider.css'
import bicycle from '../assets/images/product-slider.svg'
import { Link } from 'react-router-dom'

export default function ProductSlider({product}) {
  return (
    <div className="container-fluid text-center slider">
    <div className="row">
      <div className="col-md-12">
        <div className="slider-title p-3">{product.Name}</div>
        <img style={{position:"relative", bottom:"150px", width:"90%"}} src={bicycle} alt="" />
      </div>
      <div className="col-md-12 mt-3" style={{position:"relative",bottom:"100px",background:"linear-gradient(360deg,rgba(0,0,0,1),rgba(0,0,0,0.7),rgba(0,0,0,0.35),rgba(0,0,0,0.0001))"}}>
        <div className="row">
            <div className="col-md-8 p-5">
                <div className="row">
                    <div className="col-md-3">
                      <div style={{fontSize:"36px",fontWeight:"800",color:"#fff"}}>{product.Range}km+</div>
                      <div style={{fontSize:"24px",fontWeight:"500",color:"#fff"}}>range</div>
                    </div>
                    <div class="col-md-3">
                      <div style={{fontSize:"36px",fontWeight:"800",color:"#fff"}}>{product.MotorSpeed}km+</div>
                      <div style={{fontSize:"24px",fontWeight:"500",color:"#fff"}}>max speed</div>
                    </div>
                    <div class="col-md-3">
                      <div style={{fontSize:"36px",fontWeight:"800",color:"#fff"}}>{product.Weight}km+</div>
                      <div style={{fontSize:"24px",fontWeight:"500",color:"#fff"}}>weight</div>
                    </div>
                    <div class="col-md-3">
                      <div style={{fontSize:"36px",fontWeight:"800",color:"#fff"}}>{product.MotorTorque}km+</div>
                      <div style={{fontSize:"24px",fontWeight:"500",color:"#fff"}}>tork</div>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-5'>
              <div className="mt-3 p-1 sliderButton"><Link to="/#wishlist">join our wishlist</Link></div>
            </div>
        </div>
   
      </div>
    </div>
  </div>

  )
}
