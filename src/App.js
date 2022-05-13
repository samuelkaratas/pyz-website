import { useState } from 'react';
import './App.css';

import { joinWishlist } from './firebase';

function App() {

  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onClickHandler = () => {
    if (!email) return
    joinWishlist(email).then(res => {
      if (res) {
        setEmail('')
        setSent(true)
        // alert("Thanks for joining the wishlist! We'll notify you as soon as we launch. Cheers 🍻")
      }
    })
  }

  return (
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
        </div> : <h3 style={{ fontSize: "40px", color: '#94f7ff', fontFamily: 'Quantum' }}>Thanks for joining the wishlist! We'll notify you as soon as we launch. Cheers 🍻</h3>}
      </div>
    </div>
  );
}

export default App;

//<TextField id="outlined-basic" label="E-mail" variant="outlined" />