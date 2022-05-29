import React from 'react'
import './Footer.min.css'
import siyahbeyazlogo from '../assets/images/siyahüstübeyaz_logo.svg'
import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='container-fluid footer d-flex'>
        <div className='image'><img src={siyahbeyazlogo} alt="" /></div>
        <div className='copyright'>PYZ Realise Design Studio 2021 Inc. “make one’s dreams come true”</div>
        <div className='social-media d-flex'>
            <a href="https://instagram.com/pyzstudio/" target="_blank" rel="noreferrer"><h3><AiFillInstagram color='#94f7ff' /></h3></a>
            <a href="https://twitter.com/pyzstudio/" target="_blank" rel="noreferrer"><h3><AiFillTwitterCircle color='#94f7ff' /></h3></a>
            <a href="https://www.linkedin.com/company/pyz-realise-design-studio/" target="_blank" rel="noreferrer"><h3><AiFillLinkedin color='#94f7ff' /></h3></a>
        </div>

    </div>
  )
}
