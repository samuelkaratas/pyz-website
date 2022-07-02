import React from 'react'
import { useParams } from 'react-router-dom'
import ProductSlider from '../../components/ProductSlider';
import ProductsMain from '../../components/ProductsMain';

export default function Product() {
  const {id} = useParams();
  const products = [
    {
      "key":1,
      "id":1,
      "Name":"SD",
      "Range":"300",
      "MotorPower":"250",
      "MotorType":"Mid-drive Motor",
      "MotorSpeed":"25",
      "MotorTorque":"95",
      "MaxTorque":"200",
      "Weight":"20",
      "Material":"Aliminum"
    },
    {
      "key":2,
      "id":2,
      "Name":"T1",
      "Range":"13",
      "MotorPower":"200",
      "MotorType":"Hub Motor",
      "MotorSpeed":"25",
      "MotorTorque":"95",
      "MaxTorque":"200",
      "Weight":"5",
      "Material":"Aliminum"

    },
    {
      "key":3,
      "id":3,
      "Name":"Cyberscooter",
      "Range":"30",
      "MotorPower":"2 x 200",
      "MotorType":"Dual Hub Motor",
      "MotorSpeed":"25",
      "MotorTorque":"95",
      "MaxTorque":"200",
      "Weight":"12.5",
      "Material":"Aliminum"

    }
  ]
  return (
    <div className=''>
      <ProductSlider product={products[id]}/>
      <ProductsMain product={products[id]}/>
    </div>
  )
}
