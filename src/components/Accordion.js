import './Accordion.min.css';
import React from 'react';

export default function Accordion() {
  return (
    <div className='container-fluid'> 
    <form>
    <div>
    <input type="radio" name="size" id="small" value="small" checked="checked" /> 
    <label for="small">About Us</label>
            <article><p>We create new projects by blending contemporary and technological ideas in the globalizing world with our innovative and entrepreneurial image, and make efficient and sustainable investments in the cultural network in cooperation with leading companies that value transparency and quality in communal living.</p></article>
    </div>
    <div>
    <input type="radio" name="size" id="medium" value="medium" />     
    <label for="medium">Our mission</label>
        <article><p>We create new projects by blending contemporary and technological ideas in the globalizing world with our innovative and entrepreneurial image, and make efficient and sustainable investments in the cultural network in cooperation with leading companies that value transparency and quality in communal living.</p></article>    
    </div>
    <div>
    <input type="radio" name="size" id="large" value="large" />     
    <label for="large">Our Vision</label>
        <article><p>We create new projects by blending contemporary and technological ideas in the globalizing world with our innovative and entrepreneurial image, and make efficient and sustainable investments in the cultural network in cooperation with leading companies that value transparency and quality in communal living.</p></article>
    </div>
    
</form>
</div>
  )
}
