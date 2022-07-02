import React from 'react'
import { Link } from 'react-router-dom'
import bicycle from '../assets/images/bicyclemodel.svg'
import './ProductsMain.css'

export default function ({product}) {
  return (
    <div className='col-md-12' style={{background:"#000"}}>
        <div className='row m-auto text-center w-100 p-5' style={{color:"#fff",fontSize:"36px",fontWeight:"500",placeContent:"center"}}>Sensorial Design 1</div>
        <div className='row'>
            <div className='col-md-8 productimage'></div>
            <div className='col-md-4 mt-5'>
                <div className='productProperties row mt-2'>
                    <div className='col-md-6'>Range:</div>
                    <div className='col-md-6'>{product.Range} km+</div>
                </div>
                <div className='productProperties row mt-2'>
                    <div className='col-md-6'>Motor Power:</div>
                    <div className='col-md-6'>{product.MotorPower} Watt</div>    
                </div>
                <div className='productProperties row mt-2'>
                    <div className='col-md-6'>Motor Type:</div>
                    <div className='col-md-6'>{product.MotorType}</div>
                </div>
                <div className='productProperties row mt-2'>
                    <div className='col-md-6'>Motor Speed:</div>
                    <div className='col-md-6'>{product.MotorSpeed} km/h</div>
                </div>
                <div className='productProperties row mt-2'>
                    <div className='col-md-6'>Motor Torque:</div>
                    <div className='col-md-6'>{product.MotorTorque} nm</div>
                </div>
                <div className='productProperties row mt-2'>
                    <div className='col-md-6'>Max Torque:</div>
                    <div className='col-md-6'>{product.MaxTorque} nm+</div>
                </div>
                <div className='productProperties row mt-2'>
                    <div className='col-md-6'>Weight:</div>
                    <div className='col-md-6'>{product.Weight} kg</div>
                </div>
                <div className='productProperties row mt-2'>
                    <div className='col-md-6'>Material:</div>
                    <div className='col-md-6'>{product.Material}</div>
                </div>
            </div>
        </div>
        <div className='row m-auto text-center w-100 mt-5 p-5' style={{color:"#fff",fontSize:"64px",fontWeight:"500",placeContent:"center",background:"linear-gradient(90deg,rgba(0, 16, 159, 0.9),rgba(186,0,167,0.7),rgba(175,0,0,0.35))"}}>Unlimeted Customization Options</div>
        <div className='row m-auto text-center w-100 p-5' style={{color:"#fff",fontSize:"36px",fontWeight:"500",placeContent:"center"}}>create your own style</div>
        <div className='row pb-5'>
            <div className='col-md-8 text-center productimage' style={{placeContent:"center"}}>
                <img style={{width:"75%",placeContent:"center"}} src={bicycle} alt="" />
            </div>
            <div className='col-md-4 text-center' style={{margin:"auto 0"}}>
                <div className='mainFooterTitle mt-2'>
                    <div>{product.Name}</div>
                </div>
                <div className='mainFooterDescription mt-2'>
                    <div>Coming Soon</div>    
                </div>
                <div className='mainFooterButton mt-2'>
                    <div className="mt-3 w-75 p-1"><Link to="/#wishlist">join our wishlist</Link></div>
                </div>
            </div>
        </div>
    </div>
  )
}
