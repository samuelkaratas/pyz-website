import React from 'react'
import './Navbar.min.css'
import Sidebar from "./Sidebar";
import logo from '../assets/images/logo.svg';
import siyahbeyaz_logo from '../assets/images/siyahüstübeyaz_amblem.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='container-fluid menu'>
      <div className='row'>
      <Sidebar />
        <div  className='col-md-11 navbar m-auto'>
         
        <nav>
            <ul>
                <li>
                   <a href='#products'>Products</a>
                </li>
                <li><div className='w-50'><img  src={siyahbeyaz_logo} alt="pyz-logo" /></div></li>
                <li>
                   <a href='#aboutus'> About Us</a> 
                </li>
                
            </ul>
            
        </nav>
        
        </div>
        <div className='col-md-1 logo'><Link to="/"><img src={logo} alt="pyz-logo" /></Link></div>
        </div>
    </div>
  )
}
