import { useState } from 'react';

import { joinWishlist } from '../../firebase';

import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import '../../App.css';
import emailjs from '@emailjs/browser';

export default function Home() {

    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)
  
    const onClickHandler = () => {
      if (!email) {
        alert("Please type your email. Cheers 🍻")
        return
      }
  
      joinWishlist(email).then(res => {
        if (res) {
          emailjs.send('service_jw94g4r', 'template_10m6qyu', {email: email}, 'user_lJSn9FZGhGrtXm0F8A0jw')
            .then(function (response) {
              console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
              console.log('FAILED...', error);
            });
          setEmail('')
          setSent(true)
          // alert("Thanks for joining the wishlist! We'll notify you as soon as we launch. Cheers 🍻")
        }
      })
    }


    return (
    <div>
    <div className="hero-image">
        <div className="hero-text">
            <h1 style={{ fontSize: "40px", color: '#94f7ff', fontFamily: 'Quantum' }}>COMING SOON!</h1>
            {!sent ? <div className="input-group mb-3">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" style={{ color: 'white', borderWidth: '1px', borderColor: '#94f7ff', backgroundColor: '#b957ce88' }} />
            <button
                onClick={onClickHandler}
                className="btn btn-outline btn-change7"
                type="button" id="button-addon2"
                style={{ borderWidth: '1px', borderColor: '#94f7ff', color: '#94f7ff', backgroundColor: '#b957ce88', fontWeight: 'bold' }}
            >Notify Me!</button>
            </div> : <h3 style={{ fontSize: "30px", color: '#94f7ff', fontFamily: 'Quantum' }}>Thanks for joining the wishlist! We'll notify you as soon as we launch. Cheers 🍻</h3>}
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
            <a href="https://instagram.com/pyzstudio/" target="_blank" rel="noreferrer"><h3><AiFillInstagram color='#94f7ff' /></h3></a>
            <a href="https://twitter.com/pyzstudio/" target="_blank" rel="noreferrer"><h3><AiFillTwitterCircle color='#94f7ff' /></h3></a>
            <a href="https://www.linkedin.com/company/pyz-realise-design-studio/" target="_blank" rel="noreferrer"><h3><AiFillLinkedin color='#94f7ff' /></h3></a>
            </div>

        </div>
        </div>
    </div>
  )
}
