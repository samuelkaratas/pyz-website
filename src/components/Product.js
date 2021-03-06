import React from 'react'
import { Link } from 'react-router-dom'
import bicycle from '../assets/images/bicycle.svg'
import './Product.min.css'

export default function Product() {
  return (
    <div className='container-fluid product' id='products'>
        <div className='row'>
            <div className='col-md-4 mt-3'>
                <div className='product-title mt-3'>Cyberscooter</div>
                <div className='product-description mt-3'>slogan</div>
                <div className='product-button mt-3'><Link to={'/product/2'}>Learn more</Link></div>
                <div className='product-image my-5'><img src={bicycle} alt="" /></div>
            </div>
            <div className='col-md-4 mt-3'>
                <div className='product-title mt-3'>T1</div>
                <div className='product-description mt-3'>slogan</div>
                <div className='product-button mt-3'><Link to={'/product/1'}>Learn more</Link></div>
                <div className='product-image my-5'><img src={bicycle} alt="" /></div>
            </div>
            <div className='col-md-4 mt-3'>
                <div className='product-title mt-3'>SD1</div>
                <div className='product-description mt-3'>slogan</div>
                <div className='product-button mt-3'><Link to={'/product/0'}>Learn more</Link></div>
                <div className='product-image my-5'><img src={bicycle} alt="" /></div>
            </div>
        </div>
    </div>
  )
}
